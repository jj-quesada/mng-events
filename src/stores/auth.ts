import { defineStore } from 'pinia';
import { ref } from 'vue';
import supabase from '@/supabase';
import { AuthUser, UserProfile } from '@/interfaces/UserInterfaces';

export const useAuthStore = defineStore('auth', () => {

  const user = ref<any>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const userProfile = ref<UserProfile | null>(null);

  const init = async () =>{
    const { data: { session } } = await supabase.auth.getSession(); 
    if (session) user.value = session.user; 
  
    supabase.auth.onAuthStateChange((event, session) => { 
      user.value = session?.user || null;
      if (user.value) {
        fetchCurrentUserProfile();
      }
    });
  }

  const fetchCurrentUserProfile = async () => {
    const userID = user.value.id;
    if (!user.value) return null;
    
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userID)
      .single(); 
  
    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  
    if (data) {
      userProfile.value = data;
      return data; 
    }
    
    return null;
  };

  const signIn = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      const { data: data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      user.value = data.user;

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const signOut = async () => {
    loading.value = true;

    try {
      await supabase.auth.signOut();
      user.value = null;

      // Clear user profile
      userProfile.value = null;

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const signUp = async (
    authUser: AuthUser,
    password: string,
    userProfile: UserProfile
  ) => {
    loading.value = true;
    error.value = null;
  
    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: authUser.email,
        password: password, 
      });

  
      if (signUpError) throw signUpError;
  
      const userId = signUpData.user?.id;
  
      if (!userId) throw new Error('Could not get user ID.');
  

      await signIn(authUser.email, password); 

      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert([
          {
            user_id: userId,
            username: userProfile.username,
            date_of_birth: userProfile.date_of_birth,
            country: userProfile.country,
            province: userProfile.province,
            city: userProfile.city,
            role: userProfile.role,
          },
        ]);
  
      if (profileError) throw profileError;
  
    } catch (err: any) {
      console.log('Error during sign up:', err);
      error.value = err.message;
  
    } finally {
      loading.value = false;
    }
  };


  return {
    user,
    userProfile,
    loading,
    error,
    init,
    fetchCurrentUserProfile,
    signIn,
    signOut,
    signUp
  };
});
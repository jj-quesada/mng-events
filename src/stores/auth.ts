import { defineStore } from 'pinia';
import { ref } from 'vue';
import supabase from '@/supabase';
import { AuthUser, UserProfile } from '@/interfaces/UserInterfaces';

export const useAuthStore = defineStore('auth', () => {

  const user = ref<any>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

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

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const fetchCurrentUser = async () => {
    const currentUser = supabase.auth.getUser();

    if (currentUser) {
      user.value = currentUser;
    }

    console.log('Current user:', user);
  };

  const signUp = async (
    authUser: AuthUser,
    password: string,
    userProfile: UserProfile
  ) => {
    loading.value = true;
    error.value = null;
  
    try {
      // 1. Create user in Supabase Auth
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: authUser.email,
        password: password, 
      });

  
      if (signUpError) throw signUpError;
  
      const userId = signUpData.user?.id;
  
      if (!userId) throw new Error('Could not get user ID.');
  

      await signIn(authUser.email, password); 

      // 2. Create profile in user_profiles table
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

  const fetchCurrentUserProfile = async () => {
    await fetchCurrentUser();
    const userID = user.value?.id; // Adjusted to use the correct property for user ID
    if (!user.value) return null;
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userID)
      .single(); // Fetch single profile based on user_id

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
    if (data && data.length > 0) {
      return data; 
    }
    return null;
  };

  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    signUp,
    fetchCurrentUser,
    fetchCurrentUserProfile,
  };
});
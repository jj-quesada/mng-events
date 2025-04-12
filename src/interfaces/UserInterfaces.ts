export interface AuthUser {
    user_id: string;
    email: string;
    phone: string;
}

export interface UserProfile {
    user_id: string;
    username: string
    date_of_birth: Date;
    country: string;
    province: string;
    city: string;
    role: string;
}
  
export interface UserModel{
    "StudenNo": string,
    "Name": string,
    "ContactNo": string,
    "DOB": string,
    "Address": string,
    "Gender":string,
    "MaritalStatus": string,
    "GuardianMaleName": string,
    "GuardianFemaleName": string,
    "ProfilePic": string,
    "ClassName": string,
    "EmailAddress":string,
    "ClassMasterPublicID": string,
    "PicURL": string,
    token: string,
    verified: boolean
}
 
export interface UserState{
    isAuthenticated: Boolean,
    user: UserModel;
    error: string | undefined;
}


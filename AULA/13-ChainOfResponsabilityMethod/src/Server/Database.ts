import PermissionType from "./PermissionType"

interface DatabaseItem{
    email:string
    password:string
    permission: PermissionType
}

const Database : DatabaseItem[] = 
[
    {email:'ericmili@gmail.com', password:'123', permission:PermissionType.ADMIN},
    {email:'eric@gmail.com', password:'321', permission:PermissionType.USER},
    {email:'sara@gmail.com', password:'123321', permission:PermissionType.USER},
]

export default Database
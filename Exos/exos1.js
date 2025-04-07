const userData = '{"email":"TomMatter@gmail.com", "fullname":"Tom Mathiew"}';
const secret = "moviieBooked"

function generateToken(user){
    return btoa(user);
}

function verifyToken(token){
    const decodedToken = atob(token);
    const user = JSON.parse(decodedToken);
    return user;
}

const tokenGenerated = generateToken(userData);
console.log(tokenGenerated);

const user = verifyToken(tokenGenerated);
console.log(user);
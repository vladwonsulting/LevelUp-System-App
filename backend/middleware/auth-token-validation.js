const secretKey = process.env.GOOGLE_SECRET_KEY;

const authTokenValidation = async (token) => {
    if (!token) {
        return { success: false, message: "No token provided" };
    }

    const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${secretKey}&response=${token}`,
        }
    );

    const data = await response.json();

    return data;
};

export default authTokenValidation;

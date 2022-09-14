import axios from "axios";

const baseUrl = 'http://206.189.13.33:916/api';
const messageUrl = 'http://localhost:3000';

const authHeader = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXh3ZWxsd2FjaGlyYTY3QGdtYWlsLmNvbSIsImp0aSI6ImRiMTY1ZTBiLTIwMmQtNGM1OS1hYjk1LWFiNDlkOWNlMTI0MyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOThlNmQ1MDItY2NjMC00NzdkLTlhOTAtNGJjMWI0NzBmYWE0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk4ZTZkNTAyLWNjYzAtNDc3ZC05YTkwLTRiYzFiNDcwZmFhNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlByb3BlcnR5T3duZXIiLCJleHAiOjE2NjQ1NDkxODMsImlzcyI6IkNhZnJpbGVhcm4uY29tIn0.NjLk385lb-_3s3sr9s_qjTAcekO65gUJvcdCbAB98oI' 
};

const registerUser = async(userName: string, idNumber: string, titleDeed: string, pin: string, phoneNumber: string) => {
    let apiRes = null;
    const registerData = {
        titleDeedNumber: titleDeed,
        creditCardNumber: "",
        profilePictureUrl: "",
        createdBy: "USSD",
        identificationDocumentId: idNumber,
        identificationDocumentType: "NationalId",
        identificationDocumentUrl: "",
        role: "PropertyOwner",
        email: "maxwell454545@gmail.com",
        userName: userName,
        password: pin,
        phoneNumber: phoneNumber 
    };

    try {
        const{ data } = await axios.post(`${baseUrl}/User/register`, registerData);
        apiRes = data;
    } catch (error: any) {
        console.log(error);
        apiRes = error.response.data;
    } finally {
        return apiRes;
    }
}

const sendSingleSms = (phoneNumber: string, message:string) => {

}

const findUserByPhoneNumber = async (mobileNumber: string) => {
    let apiRes = null;
    try {
        const { data } = await axios.get(`${baseUrl}/User/getByPhone/${mobileNumber}`, {headers: authHeader});
        apiRes = data;
    } catch (error: any) {
        apiRes = error.response.data;
    } finally {
        return apiRes;
    }
}

export {
    findUserByPhoneNumber,
    registerUser
}
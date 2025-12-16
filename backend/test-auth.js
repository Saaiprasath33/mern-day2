const axios = require('axios');

const API_URL = 'http://localhost:5000/api/auth';
const TEST_USER = {
    name: 'Test Setup User',
    email: 'saai@test.com',
    password: 'password123'
};

async function testAuth() {
    console.log('--- Starting Auth Test ---');

    // 1. Register
    try {
        console.log(`Attempting to register user: ${TEST_USER.email}`);
        const regRes = await axios.post(`${API_URL}/register`, TEST_USER);
        console.log('Registration Success:', regRes.data);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error && error.response.data.error.includes('duplicate')) {
            console.log('User already exists (Duplicate key error), proceeding to login...');
        } else {
            console.error('Registration Failed:', error.response ? error.response.data : error.message);
        }
    }


    try {
        console.log(`Attempting to login user: ${TEST_USER.email}`);
        const loginRes = await axios.post(`${API_URL}/login`, {
            email: TEST_USER.email,
            password: TEST_USER.password
        });
        console.log('Login Success!');
        console.log('Token received:', !!loginRes.data.token);
        console.log('User data:', loginRes.data.user);
    } catch (error) {
        console.error('Login Failed:', error.response ? error.response.data : error.message);
    }
}

testAuth();

const users = [];

module.exports = {
    create: async (userData) => {
        // Simulate DB delay
        await new Promise(resolve => setTimeout(resolve, 100));

        // Check for existing
        if (users.find(u => u.email === userData.email)) {
            throw new Error("User already exists");
        }

        const newUser = {
            ...userData,
            _id: Date.now().toString()
        };
        users.push(newUser);
        console.log("MOCK DB: Created user", newUser);
        return newUser;
    },
    findOne: async (query) => {
        await new Promise(resolve => setTimeout(resolve, 50));
        const user = users.find(u => u.email === query.email);
        if (user) console.log("MOCK DB: Found user for", query);
        return user;
    }
};

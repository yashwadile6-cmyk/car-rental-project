// Simple auth storage using localStorage. Exposes global helpers used by main script.

(function () {
    const USERS_KEY = 'ld_users';
    const CURRENT_USER_KEY = 'ld_current_user';

    function getUsersList() {
        try {
            const raw = localStorage.getItem(USERS_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function setUsersList(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    function loadAuthFromStorage() {
        try {
            const userRaw = localStorage.getItem(CURRENT_USER_KEY);
            window.currentUser = userRaw ? JSON.parse(userRaw) : null;
        } catch (e) {
            window.currentUser = null;
        }
        if (typeof updateAccountUI === 'function') updateAccountUI();
    }

    function saveAuthToStorage() {
        if (window.currentUser) {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(window.currentUser));
        } else {
            localStorage.removeItem(CURRENT_USER_KEY);
        }
        if (typeof updateAccountUI === 'function') updateAccountUI();
    }

    function register(name, email, password) {
        const users = getUsersList();
        if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
            alert('An account with this email already exists.');
            return false;
        }
        users.push({ name, email, password });
        setUsersList(users);
        window.currentUser = { name, email };
        saveAuthToStorage();
        return true;
    }

    function login(email, password) {
        const users = getUsersList();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        if (!user) return false;
        window.currentUser = { name: user.name, email: user.email };
        saveAuthToStorage();
        return true;
    }

    function logout() {
        window.currentUser = null;
        saveAuthToStorage();
        alert('You have been logged out.');
    }

    // Expose globals expected by main script
    window.getUsersList = getUsersList;
    window.setUsersList = setUsersList;
    window.loadAuthFromStorage = loadAuthFromStorage;
    window.saveAuthToStorage = saveAuthToStorage;
    window.register = register;
    window.login = login;
    window.logout = logout;
})();



// Booking storage using localStorage. Persists bookings per user email.

(function () {
    const BOOKINGS_KEY = 'ld_bookings_by_user';
    const FEATURED_KEY = 'ld_featured_cars';

    function _readAll() {
        try {
            const raw = localStorage.getItem(BOOKINGS_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    function _writeAll(map) {
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(map));
    }

    function getUserBookings(userEmail) {
        if (!userEmail) return [];
        const all = _readAll();
        return all[userEmail] || [];
    }

    function addBooking(userEmail, booking) {
        if (!userEmail) return;
        const all = _readAll();
        const list = all[userEmail] || [];
        list.push(booking);
        all[userEmail] = list;
        _writeAll(all);
    }

    function updateBooking(userEmail, bookingId, updates) {
        if (!userEmail) return;
        const all = _readAll();
        const list = all[userEmail] || [];
        const idx = list.findIndex(b => b.id === bookingId);
        if (idx === -1) return;
        list[idx] = { ...list[idx], ...updates };
        all[userEmail] = list;
        _writeAll(all);
    }

    function hasBookedBefore(userEmail) {
        if (!userEmail) return false;
        const list = getUserBookings(userEmail);
        return Array.isArray(list) && list.length > 0;
    }

    function removeBooking(userEmail, bookingId) {
        if (!userEmail) return;
        const all = _readAll();
        const list = (all[userEmail] || []).filter(b => b.id !== bookingId);
        all[userEmail] = list;
        _writeAll(all);
    }

    // Aggregations for best sellers
    function getAllBookingsMap() {
        return _readAll();
    }

    function getCarBookingCountsThisMonth() {
        const all = _readAll();
        const counts = {};
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();
        Object.values(all).forEach(list => {
            (list || []).forEach(b => {
                if (!b) return;
                if (b.status && String(b.status).toLowerCase().includes('cancel')) return;
                const ts = typeof b.id === 'number' ? b.id : Date.parse(b.bookingDate || '');
                if (!ts || Number.isNaN(ts)) return;
                const d = new Date(ts);
                if (d.getMonth() !== month || d.getFullYear() !== year) return;
                counts[b.carId] = (counts[b.carId] || 0) + 1;
            });
        });
        return counts;
    }

    function getFeaturedCarIds() {
        try {
            const raw = localStorage.getItem(FEATURED_KEY);
            const arr = raw ? JSON.parse(raw) : [];
            return Array.isArray(arr) ? arr : [];
        } catch (e) {
            return [];
        }
    }

    function setFeaturedCarIds(ids) {
        if (!Array.isArray(ids)) return;
        localStorage.setItem(FEATURED_KEY, JSON.stringify(ids.map(Number)));
    }

    window.getUserBookings = getUserBookings;
    window.addBooking = addBooking;
    window.updateBooking = updateBooking;
    window.removeBooking = removeBooking;
    window.getAllBookingsMap = getAllBookingsMap;
    window.getCarBookingCountsThisMonth = getCarBookingCountsThisMonth;
    window.getFeaturedCarIds = getFeaturedCarIds;
    window.setFeaturedCarIds = setFeaturedCarIds;
    window.hasBookedBefore = hasBookedBefore;
})();



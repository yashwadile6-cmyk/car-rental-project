
        // Sample car data with real car images
        const cars = [
            {
                id: 1,
                name: "Tesla Model S",
                category: "luxury",
                price: 299,
                fuel: "electric",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1518444105432-6f2f2f95ee0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["Autopilot", "Premium Audio", "Glass Roof", "Supercharging"],
                available: true,
                rating: 4.9
            },
            {
                id: 2,
                name: "BMW X5",
                category: "suv",
                price: 199,
                fuel: "gasoline",
                seats: 7,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1619767886845-2264f5d3e38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1549925412-37d6f3aa4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["4WD", "Leather Seats", "Navigation", "Heated Seats"],
                available: true,
                rating: 4.8
            },
            {
                id: 3,
                name: "Mercedes-Benz C-Class",
                category: "luxury",
                price: 249,
                fuel: "gasoline",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1610388973146-98f9f0bd6a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["Premium Interior", "Advanced Safety", "Wireless Charging", "Ambient Lighting"],
                available: true,
                rating: 4.9
            },
            {
                id: 4,
                name: "Audi A4",
                category: "luxury",
                price: 189,
                fuel: "gasoline",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1624610246876-0ea6f2469fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1616422105159-61bdead1bd05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio", "Matrix LED"],
                available: true,
                rating: 4.7
            },
            {
                id: 5,
                name: "Porsche 911",
                category: "sports",
                price: 599,
                fuel: "gasoline",
                seats: 4,
                transmission: "Manual",
                image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1610563166150-3b3a110fe2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["Sport Chrono", "PASM", "Sport Exhaust", "Carbon Fiber"],
                available: true,
                rating: 5.0
            },
            {
                id: 6,
                name: "Toyota Camry",
                category: "economy",
                price: 79,
                fuel: "hybrid",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1597007511470-6f4bdc55570d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["Hybrid Engine", "Safety Sense", "Apple CarPlay", "LED Headlights"],
                available: true,
                rating: 4.5
            },
            {
                id: 7,
                name: "Range Rover Evoque",
                category: "suv",
                price: 279,
                fuel: "gasoline",
                seats: 5,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1606016159991-8b5d2f87a5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1606016159991-8b5d2f87a5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1616389262221-7b6a3bc88e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1616596876208-4e9fd3131ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["Terrain Response", "Panoramic Roof", "Meridian Audio", "ClearSight"],
                available: true,
                rating: 4.8
            },
            {
                id: 8,
                name: "Lamborghini Huracán",
                category: "sports",
                price: 1299,
                fuel: "gasoline",
                seats: 2,
                transmission: "Automatic",
                image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                images: [
                    "https://images.unsplash.com/photo-1611105654921-b4a68a74b489?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1534595098310-e3025c0c6f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ],
                features: ["V10 Engine", "Carbon Fiber", "Track Mode", "Launch Control"],
                available: true,
                rating: 5.0
            }
        ];

        // bookings are persisted via bookingStore.js
        let selectedCar = null;
        // currentUser is managed via authStore.js on window.currentUser

        // Navigation functions
        function showSection(sectionName) {
            document.querySelectorAll('.section-content').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionName).classList.remove('hidden');
            
            // Close mobile menu
            document.getElementById('mobileMenu').classList.add('hidden');
            
            if (sectionName === 'cars') {
                displayCars(cars);
            } else if (sectionName === 'bookings') {
                displayBookings();
            } else if (sectionName === 'admin') {
                renderAdmin();
            }
        }

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        }

        // ---------- Auth UI helpers ----------
        function updateAccountUI() {
            const signInBtn = document.getElementById('signInBtn');
            const userMenu = document.getElementById('userMenu');
            const userNameLabel = document.getElementById('userNameLabel');
            const adminBtn = document.getElementById('adminNavBtn');
            const adminBtnMobile = document.getElementById('adminNavBtnMobile');
            if (!signInBtn || !userMenu) return;
            if (window.currentUser) {
                signInBtn.classList.add('hidden');
                userMenu.classList.remove('hidden');
                userNameLabel.textContent = window.currentUser.name || window.currentUser.email;
                const isAdmin = window.currentUser.email && window.currentUser.email.toLowerCase().startsWith('admin@');
                if (isAdmin) {
                    if (adminBtn) adminBtn.classList.remove('hidden');
                    if (adminBtnMobile) adminBtnMobile.classList.remove('hidden');
                } else {
                    if (adminBtn) adminBtn.classList.add('hidden');
                    if (adminBtnMobile) adminBtnMobile.classList.add('hidden');
                }
            } else {
                signInBtn.classList.remove('hidden');
                userMenu.classList.add('hidden');
                if (adminBtn) adminBtn.classList.add('hidden');
                if (adminBtnMobile) adminBtnMobile.classList.add('hidden');
            }
        }

        function toggleUserDropdown() {
            const dd = document.getElementById('userDropdown');
            if (dd) dd.classList.toggle('hidden');
        }

        // ---------- Auth modal controls ----------
        function openAuthModal(tab) {
            switchAuthTab(tab || 'login');
            const modal = document.getElementById('authModal');
            if (!modal) return;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeAuthModal() {
            const modal = document.getElementById('authModal');
            if (!modal) return;
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            if (loginForm) loginForm.reset();
            if (registerForm) registerForm.reset();
        }

        function switchAuthTab(tab) {
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            const loginTab = document.getElementById('loginTab');
            const registerTab = document.getElementById('registerTab');
            const authTitle = document.getElementById('authTitle');
            if (!loginForm || !registerForm) return;

            if (tab === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                if (loginTab) {
                    loginTab.classList.add('bg-white','shadow');
                    loginTab.classList.remove('text-gray-600');
                }
                if (registerTab) {
                    registerTab.classList.remove('bg-white','shadow');
                    registerTab.classList.add('text-gray-600');
                }
                if (authTitle) authTitle.textContent = 'Welcome Back';
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
                if (registerTab) {
                    registerTab.classList.add('bg-white','shadow');
                    registerTab.classList.remove('text-gray-600');
                }
                if (loginTab) {
                    loginTab.classList.remove('bg-white','shadow');
                    loginTab.classList.add('text-gray-600');
                }
                if (authTitle) authTitle.textContent = 'Create your account';
            }
        }

        // Auth storage helpers are provided by authStore.js (register, login, logout, loadAuthFromStorage, saveAuthToStorage)

        // Search functionality
        function searchCars() {
            const pickupDate = document.getElementById('pickupDate').value;
            const returnDate = document.getElementById('returnDate').value;
            
            if (!pickupDate || !returnDate) {
                alert('Please select both pickup and return dates');
                return;
            }
            
            if (new Date(pickupDate) >= new Date(returnDate)) {
                alert('Return date must be after pickup date');
                return;
            }
            
            showSection('cars');
            displayCars(cars);
        }

        // Track current image index per car
        const carImageIndexById = {};

        // Display cars with enhanced styling
        function displayCars(carsToShow) {
            const carGrid = document.getElementById('carGrid');
            carGrid.innerHTML = '';

            carsToShow.forEach((car, index) => {
                const carCard = document.createElement('div');
                carCard.className = 'bg-white rounded-2xl shadow-xl overflow-hidden car-card fade-in';
                carCard.style.animationDelay = `${index * 0.1}s`;
                
                const images = (car.images && car.images.length > 0) ? car.images : [car.image];
                carImageIndexById[car.id] = carImageIndexById[car.id] || 0;

                carCard.innerHTML = `
                    <div class="relative overflow-hidden">
                        <img id="car-img-${car.id}" src="${images[carImageIndexById[car.id]]}" alt="${car.name}" 
                             class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                             onerror="this.onerror=null; this.src='${car.image}'; this.style.display='block';">
                        <button class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow" onclick="prevCarImage(${car.id})">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow" onclick="nextCarImage(${car.id})">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <div class="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                            ${images.map((_, i) => `
                                <span id="dot-${car.id}-${i}" class="w-2.5 h-2.5 rounded-full ${i === carImageIndexById[car.id] ? 'bg-white' : 'bg-white/50'} border border-white/80"></span>
                            `).join('')}
                        </div>
                        <div class="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                            <div class="flex items-center space-x-1">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="text-sm font-semibold">${car.rating}</span>
                            </div>
                        </div>
                        <div class="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                            ${car.category}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-3 text-gray-800">${car.name}</h3>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-users text-purple-600"></i>
                                <span>${car.seats} seats</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-cog text-purple-600"></i>
                                <span>${car.transmission}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-gas-pump text-purple-600"></i>
                                <span class="capitalize">${car.fuel}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-shield-alt text-purple-600"></i>
                                <span>Insured</span>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                ${car.features.slice(0, 3).map(feature => 
                                    `<span class="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">${feature}</span>`
                                ).join('')}
                                ${car.features.length > 3 ? `<span class="text-xs text-gray-500 px-2 py-1">+${car.features.length - 3} more</span>` : ''}
                            </div>
                        </div>
                        <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                            <div>
                                <span class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$${car.price}</span>
                                <span class="text-gray-500 text-lg">/day</span>
                            </div>
                            <button onclick="openBookingModal(${car.id})" 
                                    class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 ${!car.available ? 'opacity-50 cursor-not-allowed' : ''}"
                                    ${!car.available ? 'disabled' : ''}>
                                <i class="fas fa-calendar-check mr-2"></i>
                                ${car.available ? 'Book Now' : 'Unavailable'}
                            </button>
                        </div>
                        ${!car.available ? `
                            <div class="mt-3 p-3 rounded-xl bg-yellow-50 text-yellow-800 text-sm border border-yellow-200">
                                <i class="fas fa-circle-exclamation mr-2"></i>This car is currently not available. Please check back later.
                            </div>
                        ` : ''}
                    </div>
                `;
                carGrid.appendChild(carCard);
            });
        }

        function updateCarImageDisplay(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;
            const images = (car.images && car.images.length > 0) ? car.images : [car.image];
            let idx = carImageIndexById[carId] || 0;
            if (idx < 0) idx = 0;
            if (idx >= images.length) idx = images.length - 1;
            const imgEl = document.getElementById(`car-img-${carId}`);
            if (imgEl) {
                imgEl.onerror = null;
                imgEl.src = images[idx];
                imgEl.onerror = function() {
                    this.onerror = null;
                    this.src = (Array.isArray(images) && images.length) ? images[0] : '${car.image}';
                };
            }
            // update dots
            images.forEach((_, i) => {
                const dot = document.getElementById(`dot-${carId}-${i}`);
                if (dot) {
                    if (i === idx) {
                        dot.classList.add('bg-white');
                        dot.classList.remove('bg-white/50');
                    } else {
                        dot.classList.remove('bg-white');
                        dot.classList.add('bg-white/50');
                    }
                }
            });
        }

        function nextCarImage(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;
            const images = (car.images && car.images.length > 0) ? car.images : [car.image];
            carImageIndexById[carId] = ((carImageIndexById[carId] || 0) + 1) % images.length;
            updateCarImageDisplay(carId);
        }

        function prevCarImage(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;
            const images = (car.images && car.images.length > 0) ? car.images : [car.image];
            carImageIndexById[carId] = (carImageIndexById[carId] || 0) - 1;
            if (carImageIndexById[carId] < 0) carImageIndexById[carId] = images.length - 1;
            updateCarImageDisplay(carId);
        }

        // Filter functionality
        function applyFilters() {
            const categoryFilter = document.getElementById('categoryFilter').value;
            const priceFilter = document.getElementById('priceFilter').value;
            const fuelFilter = document.getElementById('fuelFilter').value;

            let filteredCars = cars.filter(car => {
                let matches = true;
                
                if (categoryFilter && car.category !== categoryFilter) matches = false;
                if (fuelFilter && car.fuel !== fuelFilter) matches = false;
                
                if (priceFilter) {
                    switch(priceFilter) {
                        case 'low':
                            if (car.price >= 100) matches = false;
                            break;
                        case 'medium':
                            if (car.price < 100 || car.price > 300) matches = false;
                            break;
                        case 'high':
                            if (car.price <= 300) matches = false;
                            break;
                    }
                }
                
                return matches;
            });

            displayCars(filteredCars);
        }

        // Booking modal functions
        function openBookingModal(carId) {
            if (!window.currentUser) {
                openAuthModal('login');
                return;
            }
            selectedCar = cars.find(car => car.id === carId);
            const modal = document.getElementById('bookingModal');
            const carInfo = document.getElementById('selectedCarInfo');
            
            carInfo.innerHTML = `
                <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                    <div class="flex items-center space-x-4">
                        <img src="${(selectedCar.images && selectedCar.images[0]) ? selectedCar.images[0] : selectedCar.image}" alt="${selectedCar.name}" 
                             class="w-20 h-20 object-cover rounded-xl"
                             onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">
                        <div>
                            <h4 class="text-xl font-bold text-gray-800">${selectedCar.name}</h4>
                            <p class="text-purple-600 font-semibold">$${selectedCar.price}/day • ${selectedCar.seats} seats</p>
                            <div class="flex items-center space-x-1 mt-1">
                                <i class="fas fa-star text-yellow-400"></i>
                                <span class="text-sm text-gray-600">${selectedCar.rating} rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Set default dates from search form
            const pickupDate = document.getElementById('pickupDate').value;
            const returnDate = document.getElementById('returnDate').value;
            
            if (pickupDate) document.getElementById('bookingPickupDate').value = pickupDate;
            if (returnDate) document.getElementById('bookingReturnDate').value = returnDate;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeBookingModal() {
            const modal = document.getElementById('bookingModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.getElementById('bookingForm').reset();
        }

        // Transient state for booking and payment
        let pendingBooking = null;

        // Handle booking form submission => redirect to payment page with state
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const pickupDate = document.getElementById('bookingPickupDate').value;
            const returnDate = document.getElementById('bookingReturnDate').value;
            
            const durationDays = Math.max(1, Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000*60*60*24)));
            pendingBooking = {
                id: Date.now(),
                carId: selectedCar.id,
                carName: selectedCar.name,
                carImage: (selectedCar.images && selectedCar.images[0]) ? selectedCar.images[0] : selectedCar.image,
                customerName: document.getElementById('customerName').value,
                customerEmail: document.getElementById('customerEmail').value,
                customerPhone: document.getElementById('customerPhone').value,
                pickupDate: pickupDate,
                returnDate: returnDate,
                totalPrice: calculateTotalPrice(selectedCar.price, pickupDate, returnDate),
                durationDays: durationDays,
                dailyRate: selectedCar.price,
                status: 'Pending Payment',
                bookingDate: new Date().toLocaleDateString(),
                paymentMethod: null,
                paymentRef: null
            };
            closeBookingModal();

            // Route to payment section and populate summary
            showSection('payment');
            renderOrderSummary();
            renderPaymentDetailsUI();
        });

        function calculateTotalPrice(dailyRate, pickupDate, returnDate) {
            const pickup = new Date(pickupDate);
            const returnD = new Date(returnDate);
            const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
            return dailyRate * days;
        }

        // -------- Payment Page Logic --------
        function renderOrderSummary() {
            const summary = document.getElementById('orderSummary');
            if (!summary) return;
            if (!pendingBooking) {
                summary.innerHTML = `<p class="text-gray-500">No booking in progress.</p>`;
                return;
            }
            summary.innerHTML = `
                <div class="flex items-center gap-4">
                    <img src="${pendingBooking.carImage}" alt="${pendingBooking.carName}" class="w-20 h-20 object-cover rounded-xl" onerror="this.style.display='none'">
                    <div>
                        <div class="font-bold text-gray-800">${pendingBooking.carName}</div>
                        <div class="text-sm text-gray-600">$${pendingBooking.dailyRate}/day</div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 text-sm text-gray-700">
                    <div><span class="font-semibold">Pickup:</span> ${pendingBooking.pickupDate}</div>
                    <div><span class="font-semibold">Return:</span> ${pendingBooking.returnDate}</div>
                </div>
                <div class="text-sm text-gray-700"><span class="font-semibold">Duration:</span> ${pendingBooking.durationDays} day(s)</div>
                <div class="pt-2 border-t border-gray-100">
                    <div class="flex justify-between text-gray-700">
                        <span>Total</span>
                        <span class="font-bold">$${pendingBooking.totalPrice}</span>
                    </div>
                </div>
            `;
        }

        function renderPaymentDetailsUI() {
            const methods = document.getElementById('paymentMethods');
            const details = document.getElementById('paymentDetails');
            const payBtn = document.getElementById('payNowBtn');
            const cancelBtn = document.getElementById('cancelPaymentBtn');
            const saveForLaterBtn = document.getElementById('saveForLaterBtn');
            if (!methods || !details || !payBtn || !cancelBtn) return;

            // Enable changing forms when method selected
            methods.querySelectorAll('input[name="payMethod"]').forEach((input) => {
                input.onchange = function() {
                    const method = this.value;
                    pendingBooking && (pendingBooking.paymentMethod = method);
                    payBtn.disabled = false;
                    if (method === 'upi') {
                        details.innerHTML = `
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-2">UPI ID</label>
                                <input id="upiId" type="text" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="name@bank">
                            </div>
                        `;
                    } else if (method === 'card') {
                        details.innerHTML = `
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                                    <input id="cardNum" type="text" maxlength="19" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="1234 5678 9012 3456">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-2">Name on Card</label>
                                    <input id="cardName" type="text" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="Jane Doe">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-2">Expiry</label>
                                    <input id="cardExp" type="text" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="MM/YY">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                                    <input id="cardCvv" type="password" maxlength="4" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all" placeholder="123">
                                </div>
                            </div>
                        `;
                    } else {
                        details.innerHTML = `
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-2">Bank</label>
                                <select id="bankSelect" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all">
                                    <option>HDFC</option>
                                    <option>ICICI</option>
                                    <option>SBI</option>
                                </select>
                            </div>
                        `;
                    }
                };
            });

            payBtn.onclick = function() {
                if (!pendingBooking || !pendingBooking.paymentMethod) {
                    alert('Please select a payment method.');
                    return;
                }
                // Simple front-end validation
                if (pendingBooking.paymentMethod === 'upi') {
                    const upi = document.getElementById('upiId')?.value.trim();
                    if (!upi || !upi.includes('@')) return alert('Enter a valid UPI ID');
                }
                if (pendingBooking.paymentMethod === 'card') {
                    const num = document.getElementById('cardNum')?.value.replace(/\s+/g,'');
                    const name = document.getElementById('cardName')?.value.trim();
                    const exp = document.getElementById('cardExp')?.value.trim();
                    const cvv = document.getElementById('cardCvv')?.value.trim();
                    if (!num || num.length < 12 || !name || !exp || !cvv) return alert('Enter complete card details');
                }
                // Mock processing
                payBtn.disabled = true;
                payBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
                setTimeout(() => completePayment(), 1200);
            };

            cancelBtn.onclick = function() {
                // Abandon payment without saving
                pendingBooking = null;
                showSection('cars');
            };

            if (saveForLaterBtn) {
                saveForLaterBtn.onclick = function() {
                    if (pendingBooking && window.currentUser?.email) {
                        // Keep status as Pending Payment
                        addBooking(window.currentUser.email, pendingBooking);
                        alert('Saved to your booking history as Pending.');
                        pendingBooking = null;
                        showSection('bookings');
                        displayBookings();
                    } else {
                        alert('Please sign in to save your booking.');
                        openAuthModal('login');
                    }
                };
            }
        }

        function renderStatusBadge(status) {
            const s = (status || '').toLowerCase();
            if (s.includes('cancel')) {
                return `<span class="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><i class="fas fa-ban mr-1"></i>${status}</span>`;
            }
            if (s.includes('pending')) {
                return `<span class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><i class="fas fa-hourglass-half mr-1"></i>${status}</span>`;
            }
            return `<span class="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><i class="fas fa-check-circle mr-1"></i>${status}</span>`;
        }

        function completePayment() {
            if (!pendingBooking) return;
            pendingBooking.status = 'Confirmed';
            pendingBooking.paymentRef = 'PAY' + Math.floor(Math.random()*1e8).toString().padStart(8,'0');
            if (window.currentUser && window.currentUser.email) {
                addBooking(window.currentUser.email, pendingBooking);
            }
            // Mark car as unavailable after confirmed booking
            const carIdx = cars.findIndex(c => c.id === pendingBooking.carId);
            if (carIdx !== -1) {
                cars[carIdx].available = false;
            }
            renderConfirmation();
            // clear transient state
            const bookingCopy = pendingBooking;
            pendingBooking = null;
            // Mock notifications
            if (window.currentUser && window.currentUser.email) {
                console.log('Email sent to', window.currentUser.email, '- Booking confirmed');
                console.log('SMS sent to', '***-***-****', '- Booking confirmed');
            }
            // Real email via EmailJS if configured
            sendEmailOnBooking(window.currentUser, bookingCopy);
        }

        function renderConfirmation() {
            showSection('confirmation');
            const wrap = document.getElementById('confirmationDetails');
            if (!wrap) return;
            // Load the most recent booking for the user
            let booking = null;
            if (window.currentUser && window.currentUser.email) {
                const bookings = getUserBookings(window.currentUser.email);
                booking = bookings[bookings.length - 1];
            }
            if (!booking) {
                wrap.innerHTML = '<p class="text-gray-600">No booking found.</p>';
                return;
            }
            wrap.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    <div class="space-y-2">
                        <div class="font-semibold text-gray-900">Booking Details</div>
                        <div>Booking ID: <span class="font-medium">#${booking.id}</span></div>
                        <div>Date: ${booking.bookingDate}</div>
                        <div>Status: <span class="text-green-600 font-semibold">${booking.status}</span></div>
                        <div>Payment Ref: <span class="font-mono">${booking.paymentRef || '-'}</span></div>
                    </div>
                    <div class="space-y-2">
                        <div class="font-semibold text-gray-900">Customer</div>
                        <div>${booking.customerName}</div>
                        <div class="text-sm text-gray-600">${booking.customerEmail}</div>
                        <div class="text-sm text-gray-600">${booking.customerPhone}</div>
                    </div>
                    <div class="space-y-2">
                        <div class="font-semibold text-gray-900">Car</div>
                        <div class="flex items-center gap-3">
                            <img src="${booking.carImage}" alt="${booking.carName}" class="w-16 h-16 object-cover rounded" onerror="this.style.display='none'">
                            <div>
                                <div class="font-medium">${booking.carName}</div>
                                <div class="text-sm text-gray-600">$${booking.dailyRate}/day</div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="font-semibold text-gray-900">Schedule</div>
                        <div>Pickup: ${booking.pickupDate}</div>
                        <div>Return: ${booking.returnDate}</div>
                        <div>Duration: ${booking.durationDays || Math.max(1, Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / (1000*60*60*24)))} day(s)</div>
                    </div>
                </div>
                <div class="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                    <div class="flex justify-between items-center">
                        <div class="text-gray-700">Total Paid</div>
                        <div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$${booking.totalPrice}</div>
                    </div>
                </div>
            `;
        }

        // Display bookings with enhanced styling
        function displayBookings() {
            const bookingsList = document.getElementById('bookingsList');

            if (!window.currentUser) {
                bookingsList.innerHTML = `
                    <div class="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div class="mb-6">
                            <i class="fas fa-user-lock text-6xl text-gray-300"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">Please sign in</h3>
                        <p class="text-gray-600 mb-8">Log in to view and manage your bookings.</p>
                        <button onclick="openAuthModal('login')" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold transform hover:scale-105">
                            <i class="fas fa-right-to-bracket mr-2"></i>Sign In
                        </button>
                    </div>
                `;
                return;
            }

            const userBookings = getUserBookings(window.currentUser.email);

            if (!userBookings || userBookings.length === 0) {
                bookingsList.innerHTML = `
                    <div class="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div class="mb-6">
                            <i class="fas fa-calendar-times text-6xl text-gray-300"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">No Bookings Yet</h3>
                        <p class="text-gray-600 mb-8">Start your journey by exploring our premium fleet!</p>
                        <button onclick="showSection('cars')" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold transform hover:scale-105">
                            <i class="fas fa-car mr-2"></i>Browse Our Fleet
                        </button>
                    </div>
                `;
                return;
            }
            
            const hasHistory = typeof hasBookedBefore === 'function' && hasBookedBefore(window.currentUser.email);
            const headerNote = hasHistory ? `<div class="mb-4 text-sm text-gray-600"><i class=\"fas fa-clock mr-2 text-purple-600\"></i>You have booking history on this account.</div>` : '';
            bookingsList.innerHTML = headerNote + userBookings.map((booking, index) => `
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden fade-in" style="animation-delay: ${index * 0.1}s;">
                    <div class="md:flex">
                        <div class="md:w-1/3">
                            <img src="${booking.carImage}" alt="${booking.carName}" 
                                 class="w-full h-48 md:h-full object-cover"
                                 onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';">
                        </div>
                        <div class="md:w-2/3 p-8">
                            <div class="flex justify-between items-start mb-6">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${booking.carName}</h3>
                                    <p class="text-gray-600">Booking #${booking.id}</p>
                                </div>
                                ${renderStatusBadge(booking.status)}
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div class="space-y-3">
                                    <h4 class="font-semibold text-gray-800 flex items-center">
                                        <i class="fas fa-user mr-2 text-purple-600"></i>Customer Details
                                    </h4>
                                    <div class="text-gray-600 space-y-1">
                                        <p class="font-medium">${booking.customerName}</p>
                                        <p class="text-sm">${booking.customerEmail}</p>
                                        <p class="text-sm">${booking.customerPhone}</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <h4 class="font-semibold text-gray-800 flex items-center">
                                        <i class="fas fa-calendar-alt mr-2 text-purple-600"></i>Rental Period
                                    </h4>
                                    <div class="text-gray-600 space-y-1">
                                        <p><span class="font-medium">Pickup:</span> ${booking.pickupDate}</p>
                                        <p><span class="font-medium">Return:</span> ${booking.returnDate}</p>
                                        <p><span class="font-medium">Duration:</span> ${(booking.durationDays) ? booking.durationDays : Math.max(1, Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate))/(1000*60*60*24)))} day(s)</p>
                                        <p class="text-sm">Booked on ${booking.bookingDate}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-200">
                                <div class="mb-4 sm:mb-0">
                                    <div class="text-sm text-gray-600 mb-1">Total Amount</div>
                                    <span class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$${booking.totalPrice}</span>
                                    <span class="text-gray-500 ml-2">($${booking.dailyRate}/day)</span>
                                </div>
                                <button onclick="cancelBooking(${booking.id})" class="bg-gradient-to-r from-red-400 to-red-600 text-white py-3 px-6 rounded-xl hover:from-red-500 hover:to-red-700 transition-all duration-300 font-semibold transform hover:scale-105">
                                    <i class="fas fa-times mr-2"></i>Cancel Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function cancelBooking(bookingId) {
            if (!window.currentUser) return openAuthModal('login');
            if (confirm('Are you sure you want to cancel this booking? This action cannot be undone.')) {
                const userBookings = getUserBookings(window.currentUser.email);
                const booking = userBookings.find(b => b.id === bookingId);
                if (booking) {
                    const carIndex = cars.findIndex(car => car.id === booking.carId);
                    if (carIndex !== -1) {
                        cars[carIndex].available = true;
                    }
                    if (typeof updateBooking === 'function') {
                        updateBooking(window.currentUser.email, bookingId, { status: 'Canceled' });
                    } else {
                        removeBooking(window.currentUser.email, bookingId);
                    }
                    displayBookings();
                    alert('✅ Booking cancelled successfully. We hope to serve you again soon!');
                }
            }
        }

        // Set default dates
        function setDefaultDates() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            document.getElementById('pickupDate').value = today.toISOString().split('T')[0];
            document.getElementById('returnDate').value = tomorrow.toISOString().split('T')[0];
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white', 'shadow-lg');
                navbar.classList.remove('glass-effect');
                // Change text colors for better contrast on white background
                navbar.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('text-white', 'hover:text-purple-300');
                    btn.classList.add('text-gray-700', 'hover:text-purple-600');
                });
                const brand = navbar.querySelector('.gradient-text');
                if (brand) brand.classList.remove('gradient-text');
                navbar.querySelector('h1').classList.add('text-gray-800');
            } else {
                navbar.classList.remove('bg-white', 'shadow-lg');
                navbar.classList.add('glass-effect');
                // Restore original colors
                navbar.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.add('text-white', 'hover:text-purple-300');
                    btn.classList.remove('text-gray-700', 'hover:text-purple-600');
                });
                navbar.querySelector('h1').classList.remove('text-gray-800');
                navbar.querySelector('h1').classList.add('gradient-text');
            }
        });

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            setDefaultDates();
            displayCars(cars);
            if (typeof loadAuthFromStorage === 'function') loadAuthFromStorage();
            
            // Add smooth scrolling
            document.documentElement.style.scrollBehavior = 'smooth';

            // ---- Hash-based routing so refresh keeps the current section ----
            function routeToHash() {
                const hash = (location.hash || '#home').replace('#','');
                const valid = ['home','cars','bookings','admin','payment','confirmation'];
                if (valid.includes(hash)) {
                    showSection(hash);
                } else {
                    showSection('home');
                }
            }
            window.addEventListener('hashchange', routeToHash);
            routeToHash();

            // Open auth modal when hash is #login or #register
            function routeAuthFromHash() {
                const h = (location.hash || '').toLowerCase();
                if (h === '#login') {
                    showSection('home');
                    openAuthModal('login');
                } else if (h === '#register') {
                    showSection('home');
                    openAuthModal('register');
                }
            }
            routeAuthFromHash();
            window.addEventListener('hashchange', routeAuthFromHash);

            // Best sellers initial render and auto-refresh
            renderBestSellers();
            const btn = document.getElementById('refreshBestSellersBtn');
            if (btn) btn.addEventListener('click', () => { renderBestSellers(true); displayCars(cars); });
            setInterval(() => renderBestSellers(), 60 * 1000);

            // Simulate availability toggling every 2 minutes
            simulateAvailability();
            setInterval(simulateAvailability, 2 * 60 * 1000);
        });

        // ---------- Admin Dashboard ----------
        function renderAdmin() {
            const gate = document.getElementById('adminGate');
            const content = document.getElementById('adminContent');
            if (!gate || !content) return;
            const isAdmin = window.currentUser && window.currentUser.email && window.currentUser.email.toLowerCase().startsWith('admin@');
            if (!isAdmin) {
                gate.classList.remove('hidden');
                content.classList.add('hidden');
                return;
            }
            gate.classList.add('hidden');
            content.classList.remove('hidden');

            // Featured cars UI
            const featuredIds = (typeof getFeaturedCarIds === 'function') ? getFeaturedCarIds() : [];
            const featuredList = document.getElementById('featuredList');
            if (featuredList) {
                featuredList.innerHTML = cars.map(c => `
                    <label class="flex items-center gap-3 p-3 border rounded-xl hover:bg-gray-50">
                        <input type="checkbox" value="${c.id}" ${featuredIds.includes(c.id) ? 'checked' : ''}>
                        <img src="${(c.images && c.images[0]) ? c.images[0] : c.image}" alt="${c.name}" class="w-12 h-12 object-cover rounded">
                        <div class="flex-1">
                            <div class="font-semibold">${c.name}</div>
                            <div class="text-xs text-gray-500">$${c.price}/day</div>
                        </div>
                    </label>
                `).join('');
                const saveFeaturedBtn = document.getElementById('saveFeaturedBtn');
                if (saveFeaturedBtn) {
                    saveFeaturedBtn.onclick = function() {
                        const selected = Array.from(featuredList.querySelectorAll('input[type="checkbox"]:checked')).map(i => Number(i.value));
                        if (typeof setFeaturedCarIds === 'function') setFeaturedCarIds(selected);
                        alert('Featured cars updated');
                        renderBestSellers(true);
                    };
                }
            }

            // Cars management
            const grid = document.getElementById('carsManageGrid');
            if (grid) {
                grid.innerHTML = cars.map(c => `
                    <div class="border rounded-2xl p-4 bg-white">
                        <div class="flex items-center gap-3 mb-3">
                            <img src="${(c.images && c.images[0]) ? c.images[0] : c.image}" alt="${c.name}" class="w-14 h-14 object-cover rounded">
                            <div class="font-semibold">${c.name}</div>
                        </div>
                        <div class="flex items-center justify-between mb-3">
                            <div class="text-sm text-gray-600">Availability</div>
                            <label class="inline-flex items-center gap-2 text-sm">
                                <input type="checkbox" data-field="available" data-id="${c.id}" ${c.available ? 'checked' : ''}>
                                <span>${c.available ? 'Available' : 'Unavailable'}</span>
                            </label>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-600">Base Price ($/day)</div>
                            <input type="number" min="1" class="w-24 p-2 border rounded" data-field="price" data-id="${c.id}" value="${c.price}">
                        </div>
                    </div>
                `).join('');

                const saveOverridesBtn = document.getElementById('saveOverridesBtn');
                if (saveOverridesBtn) {
                    saveOverridesBtn.onclick = function() {
                        // apply changes to cars array
                        grid.querySelectorAll('input[data-field]').forEach(input => {
                            const id = Number(input.getAttribute('data-id'));
                            const field = input.getAttribute('data-field');
                            const idx = cars.findIndex(c => c.id === id);
                            if (idx === -1) return;
                            if (field === 'available') {
                                cars[idx].available = input.checked;
                            } else if (field === 'price') {
                                const v = Number(input.value);
                                if (!Number.isNaN(v) && v > 0) cars[idx].price = v;
                            }
                        });
                        alert('Car settings saved');
                        displayCars(cars);
                        renderBestSellers(true);
                    };
                }
            }

            // Email settings
            const serviceInput = document.getElementById('emailjsServiceId');
            const templateInput = document.getElementById('emailjsTemplateId');
            const publicInput = document.getElementById('emailjsPublicKey');
            const cfg = getEmailConfig();
            if (serviceInput && templateInput && publicInput) {
                serviceInput.value = cfg.serviceId || '';
                templateInput.value = cfg.templateId || '';
                publicInput.value = cfg.publicKey || '';
            }
            const saveEmailBtn = document.getElementById('saveEmailConfigBtn');
            if (saveEmailBtn) {
                saveEmailBtn.onclick = function() {
                    setEmailConfig({
                        serviceId: serviceInput.value.trim(),
                        templateId: templateInput.value.trim(),
                        publicKey: publicInput.value.trim()
                    });
                    alert('Email settings saved');
                };
            }
            const testBtn = document.getElementById('testEmailBtn');
            if (testBtn) {
                testBtn.onclick = async function() {
                    const user = window.currentUser || { name: 'Test User', email: 'test@example.com' };
                    await sendEmailOnBooking(user, {
                        id: Date.now(),
                        carName: 'Test Car',
                        pickupDate: new Date().toISOString().slice(0,10),
                        returnDate: new Date(Date.now()+86400000).toISOString().slice(0,10),
                        totalPrice: 100,
                        paymentRef: 'TESTREF'
                    });
                    alert('Test email attempted (check console for errors).');
                };
            }
        }

        // Close modal when clicking outside
        document.getElementById('bookingModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookingModal();
            }
        });

        // Close auth modal when clicking backdrop
        document.getElementById('authModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeAuthModal();
            }
        });

        // Handle auth form submissions
        const loginFormEl = document.getElementById('loginForm');
        if (loginFormEl) {
            loginFormEl.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value.trim();
                const password = document.getElementById('loginPassword').value;
                if (!login(email, password)) {
                    alert('Invalid credentials. Please try again.');
                    return;
                }
                closeAuthModal();
                alert('Welcome back!');
            });
        }

        // ---------- Best Sellers ----------
        function renderBestSellers(forceTimestamp) {
            const row = document.getElementById('bestSellersRow');
            const tsEl = document.getElementById('bestSellersUpdatedAt');
            if (!row) return;

            const counts = (typeof getCarBookingCountsThisMonth === 'function') ? getCarBookingCountsThisMonth() : {};
            const featured = (typeof getFeaturedCarIds === 'function') ? getFeaturedCarIds() : [];

            // Rank cars: featured first (keep order), then by counts desc
            const carById = new Map(cars.map(c => [c.id, c]));
            const countEntries = Object.entries(counts).map(([id, c]) => ({ id: Number(id), count: c }));
            countEntries.sort((a,b) => b.count - a.count);

            const orderedIds = [];
            // featured precedence
            featured.forEach(fid => { if (carById.has(fid) && !orderedIds.includes(fid)) orderedIds.push(fid); });
            // then top counted
            countEntries.forEach(e => { if (!orderedIds.includes(e.id) && carById.has(e.id)) orderedIds.push(e.id); });
            // then fill with remaining cars to show at least 4
            cars.forEach(c => { if (!orderedIds.includes(c.id)) orderedIds.push(c.id); });

            const top = orderedIds.slice(0, 4).map(id => carById.get(id)).filter(Boolean);

            row.innerHTML = top.map((car, i) => {
                const c = counts[car.id] || 0;
                const isFeatured = featured.includes(car.id);
                const demandFactor = 1 + Math.min(0.5, c * 0.05);
                const dynamicPrice = Math.round(car.price * demandFactor);
                return `
                    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
                        <div class="relative">
                            <img src="${(car.images && car.images[0]) ? car.images[0] : car.image}" alt="${car.name}" class="w-full h-40 object-cover" onerror="this.style.display='none'">
                            ${isFeatured ? '<span class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">Featured</span>' : ''}
                            ${c > 0 ? `<span class="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">${c} booked</span>` : ''}
                        </div>
                        <div class="p-4">
                            <div class="font-bold text-gray-900">${car.name}</div>
                            <div class="text-sm text-gray-600">Base: $${car.price}/day • ${car.seats} seats</div>
                            <div class="text-sm text-green-700 mb-3">Now: <span class="font-semibold">$${dynamicPrice}</span>/day</div>
                            ${car.available ? `
                                <button onclick=\"openBookingModal(${car.id})\" class=\"w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 rounded-lg hover:from-purple-700 hover:to-blue-700 text-sm font-semibold\">Book Now</button>
                            ` : `
                                <button disabled class=\"w-full bg-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-semibold cursor-not-allowed\">Unavailable</button>
                                <div class=\"mt-2 text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded px-2 py-1\">This car is currently not available.</div>
                            `}
                        </div>
                    </div>
                `;
            }).join('');

            if (tsEl) tsEl.textContent = forceTimestamp ? new Date().toLocaleTimeString() : 'just now';
        }

        function simulateAvailability() {
            // Randomly toggle availability for ~20% of cars
            cars.forEach(car => {
                if (Math.random() < 0.2) {
                    car.available = !car.available;
                }
            });
            // Rerender current views
            const carsSection = document.getElementById('cars');
            if (carsSection && !carsSection.classList.contains('hidden')) {
                displayCars(cars);
            }
            renderBestSellers();
        }

        // ---------- Email (EmailJS) ----------
        const EMAIL_CFG_KEY = 'ld_emailjs_config';
        function getEmailConfig() {
            try {
                const raw = localStorage.getItem(EMAIL_CFG_KEY);
                return raw ? JSON.parse(raw) : {};
            } catch (e) { return {}; }
        }
        function setEmailConfig(cfg) {
            localStorage.setItem(EMAIL_CFG_KEY, JSON.stringify(cfg || {}));
        }

        function ensureEmailJsInit() {
            const cfg = getEmailConfig();
            if (window.emailjs && cfg.publicKey && !ensureEmailJsInit._inited) {
                try { window.emailjs.init(cfg.publicKey); ensureEmailJsInit._inited = true; } catch(e) { console.warn(e); }
            }
            return cfg;
        }

        async function sendEmailOnRegister(user) {
            const cfg = ensureEmailJsInit();
            if (!window.emailjs || !cfg.serviceId || !cfg.templateId) return;
            try {
                await window.emailjs.send(cfg.serviceId, cfg.templateId, {
                    to_email: user.email,
                    to_name: user.name || user.email,
                    subject: 'Welcome to LuxeDrive',
                    message: `Hi ${user.name || ''}, your account has been created successfully.`
                });
                console.log('Registration email sent');
            } catch (e) { console.warn('EmailJS error (register):', e); }
        }

        async function sendEmailOnBooking(user, booking) {
            const cfg = ensureEmailJsInit();
            if (!window.emailjs || !cfg.serviceId || !cfg.templateId) return;
            if (!user || !booking) return;
            try {
                await window.emailjs.send(cfg.serviceId, cfg.templateId, {
                    to_email: user.email,
                    to_name: user.name || user.email,
                    subject: 'Your LuxeDrive booking is confirmed',
                    message: `Booking #${booking.id}\nCar: ${booking.carName}\nPickup: ${booking.pickupDate}\nReturn: ${booking.returnDate}\nAmount: $${booking.totalPrice}\nRef: ${booking.paymentRef}`
                });
                console.log('Booking email sent');
            } catch (e) { console.warn('EmailJS error (booking):', e); }
        }

        const registerFormEl = document.getElementById('registerForm');
        if (registerFormEl) {
            registerFormEl.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('regName').value.trim();
                const email = document.getElementById('regEmail').value.trim();
                const password = document.getElementById('regPassword').value;
                const confirm = document.getElementById('regConfirm').value;
                if (password !== confirm) {
                    alert('Passwords do not match.');
                    return;
                }
                if (!register(name, email, password)) return;
                closeAuthModal();
                alert('Account created! You are now signed in.');
                sendEmailOnRegister({ name, email });
            });
        }


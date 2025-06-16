// Enhanced JavaScript for DakNue Coffea
console.log("DakNue Coffea - Enhanced Script Loaded");

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('coffee_order');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phno').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Enhanced validation
            let isValid = true;
            let errorMessage = '';
            
            // Name validation
            if (!name || name.length < 2) {
                isValid = false;
                errorMessage += 'Please enter a valid name (minimum 2 characters).\n';
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
            
            // Phone validation
            const phoneRegex = /^\d{10}$/;
            if (!phone || !phoneRegex.test(phone)) {
                isValid = false;
                errorMessage += 'Please enter a valid 10-digit phone number.\n';
            }
            
            // Message validation
            if (!message || message.length < 10) {
                isValid = false;
                errorMessage += 'Please enter a message (minimum 10 characters).\n';
            }
            
            if (isValid) {
                // Show success message
                showNotification('Thank you! Your message has been submitted successfully.', 'success');
                
                // Reset form
                form.reset();
                
                // Simulate form submission (replace with actual API call)
                console.log('Form submitted:', { name, email, phone, message });
            } else {
                showNotification(errorMessage, 'error');
            }
        });
    }
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const categoriesDropdown = document.querySelector('.categories-dropdown');
    
    // Mobile menu toggle
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', 
                mainNav.classList.contains('show').toString());
        });
    }
    
    // Categories dropdown functionality
    if (categoriesDropdown) {
        console.log('✅ Categories dropdown found:', categoriesDropdown);
        const dropdownMenu = categoriesDropdown.querySelector('.dropdown-menu');
        
        if (dropdownMenu) {
            console.log('✅ Dropdown menu found:', dropdownMenu);
        } else {
            console.error('❌ Dropdown menu not found');
        }
        
        // Click to toggle dropdown (sửa lại logic)
        categoriesDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                const isOpen = dropdownMenu.style.display === 'block';
                dropdownMenu.style.display = isOpen ? 'none' : 'block';
            }
        });

        // Đóng dropdown khi click ra ngoài
        document.addEventListener('click', function(event) {
            if (!categoriesDropdown.contains(event.target)) {
                const dropdownMenu = categoriesDropdown.querySelector('.dropdown-menu');
                if (dropdownMenu) dropdownMenu.style.display = 'none';
            }
        });

        // Đóng dropdown khi bấm Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                categoriesDropdown.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        console.warn('⚠️ Categories dropdown not found');
    }
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
        
        // Real-time search suggestions (optional)
        searchInput.addEventListener('input', function() {
            // Add debounced search suggestions here if needed
            console.log('Searching for:', this.value);
        });
    }
});

// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.cart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Cart feature coming soon!', 'info');
        });
    }
    
    const wishlistBtn = document.querySelector('.wishlist');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Wishlist feature coming soon!', 'info');
        });
    }
});

// Utility functions
function performSearch(query) {
    if (query.trim()) {
        console.log('Performing search for:', query);
        showNotification(`Searching for: ${query}`, 'info');
        // Add actual search functionality here
    } else {
        showNotification('Please enter a search term', 'warning');
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#2196F3'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 1.4;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('.categories-dropdown, .nav-categories-menu');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add focus management for mobile menu
    const mobileMenuLinks = document.querySelectorAll('.main-nav a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('focus', function() {
            // Ensure mobile menu is visible when navigating with keyboard
            const mainNav = this.closest('.main-nav');
            if (mainNav && window.innerWidth <= 768) {
                mainNav.classList.add('show');
            }
        });
    });
});

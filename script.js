document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const registerButton = document.querySelector('.register');
    
    // Create mobile menu container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.style.display = 'none';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
            <button class="mobile-menu-close">&times;</button>
            <div class="mobile-nav-links">
                <a href="#driver-login" class="support">Support</a>
                <a href="#driver-login" class="register mobile-register">Register</a>
            </div>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
    });

    // Close mobile menu
    const closeMenuButton = mobileMenu.querySelector('.mobile-menu-close');
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    // Create register options dropdown/modal
    const registerOptions = document.createElement('div');
    registerOptions.className = 'register-options';
    registerOptions.style.display = 'none';
    registerOptions.innerHTML = `
        <div class="register-options-content">
            <button class="register-options-close">&times;</button>
            <h2>Join Bolt</h2>
            <div class="register-grid">
                <a href="login.html?type=driver" class="register-option" data-type="driver">
                    <h3>Drive and earn</h3>
                    <p>Become a Bolt driver and earn money on your schedule</p>
                </a>
                <a href="login.html?type=courier" class="register-option" data-type="courier">
                    <h3>Deliver with Bolt Food</h3>
                    <p>Earn money delivering food as a courier</p>
                </a>
                <a href="login.html?type=merchant" class="register-option" data-type="merchant">
                    <h3>Partner as a merchant</h3>
                    <p>Increase your sales with Bolt Food</p>
                </a>
                <a href="login.html?type=fleet" class="register-option" data-type="fleet">
                    <h3>Grow your fleet</h3>
                    <p>Manage your transport business with Bolt</p>
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(registerOptions);

    // Register button functionality
    const showRegisterOptions = (e) => {
        e.preventDefault();
        registerOptions.style.display = registerOptions.style.display === 'none' ? 'block' : 'none';
    };

    registerButton.addEventListener('click', showRegisterOptions);
    
    // Add event listener for mobile register button
    const mobileRegister = mobileMenu.querySelector('.mobile-register');
    mobileRegister.addEventListener('click', showRegisterOptions);

    // Close register options
    const closeRegisterButton = registerOptions.querySelector('.register-options-close');
    closeRegisterButton.addEventListener('click', () => {
        registerOptions.style.display = 'none';
    });

    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (!registerOptions.contains(e.target) && !registerButton.contains(e.target) && 
            !mobileRegister.contains(e.target)) {
            registerOptions.style.display = 'none';
        }
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.style.display = 'none';
        }
    });

    // Close register options when clicking a register option
    const registerOptionLinks = registerOptions.querySelectorAll('.register-option');
    registerOptionLinks.forEach(link => {
        link.addEventListener('click', () => {
            registerOptions.style.display = 'none';
        });
    });
});
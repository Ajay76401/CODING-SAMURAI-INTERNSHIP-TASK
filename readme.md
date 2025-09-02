
    .navbar-ul {
        display: none;
        /* hide menu by default */
        flex-direction: column;
        /* vertical list */
        background-color: #111;
        /* dropdown background */
        position: relative;
        width: 100%;
        top: 80px;
        left: 0;
        padding-left: 20px;
        border-radius: 0;
        gap: 1px;
    }

    .navbar-ul.active {
        display: flex !important;
        z-index: 2000;
        /* keeps menu above everything */
    }

    .navbar-ul li {
        margin: 15px 0;
        /* spacing between links */
    }
<nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
    <div class="container">
        <a class="navbar-brand mx-auto d-lg-none" href="#">
            Doctor Appointment
            <strong class="d-block">Management System</strong>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">


            <a class="navbar-brand d-flex align-items-center" href="/" style="text-decoration: none; color: inherit;">
                <span style="font-weight: bold; font-size: 1.5rem;">AVI</span>
                <span style="font-weight: normal; margin-left: 0.5rem; font-size: 1.5rem;">Clinic</span>
            </a>


                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="{{ route('appointment.check') }}">Check Appointment</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#booking">Booking</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="{{ route('login') }}">Doctor</a>
                </li>
            </ul>
        </div>

    </div>
</nav>

import React from 'react'

const Appointment = () => {
    return (
        <>
            {/* <!-- Appointment Start --> */}
            <div class="container-fluid bg-primary bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-6 py-5">
                            <div class="py-5">
                                <h1 class="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                                <p class="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 class="text-white mb-4">Make Appointment</h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select bg-light border-0" style={{ height: "55px" }}>
                                                <option selected>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select bg-light border-0" style={{ height: "55px" }}>
                                                <option selected>Select Doctor</option>
                                                <option value="1">Doctor 1</option>
                                                <option value="2">Doctor 2</option>
                                                <option value="3">Doctor 3</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="date" id="date1" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Appointment Date" data-target="#date1" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="time" id="time1" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Appointment Time" data-target="#time1" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appointment End -->  */}
        </>
    )
}
export default Appointment;

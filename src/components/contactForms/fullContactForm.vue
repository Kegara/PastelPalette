<template>
  <!-- ======= Contact Section ======= -->
  <section class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contact</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div
        class="row justify-content-around my-5"
        data-aos="fade-in"
      >
        <div class="col-lg-5 d-flex flex-column align-items-stretch card p-4">
          <div class="contact-container d-flex mb-2">
            <div class="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
            </div>
            <div class="contact-text ml-3">
              <h4 class="m-0">
                Location:
              </h4>
              <p class="m-0">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>

          <div class="contact-container d-flex mb-2">
            <div class="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                />
              </svg>
            </div>
            <div class="contact-text">
              <h4 class="m-0">
                opening times:
              </h4>
              <p class="m-0">
                09:00-16:00 hr.
              </p>
            </div>
          </div>
          <div class="contact-container d-flex mb-2">
            <div class="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
                fill="currentColor"
                class="bi bi-phone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
                />
              </svg>
            </div>
            <div class="contact-text">
              <h4 class="m-0">
                Call:
              </h4>
              <p class="m-0">
                +1 5589 55488 55s
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            style="border: 0; width: 100%; height: 100%"
            allowfullscreen
          />
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch card p-4">
          <form 
            role="form"
            class="php-email-form"
          >
            <div class="row">
              <label class="text-start">Information</label>
              <div class="form-floating col-md-6 mb-2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                >
                <label for="name">Name</label>
              </div>
              <div class="form-floating col-md-6 mb-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="name@example.com"
                  required
                >
                <label for="name">Email</label>
              </div>
            </div>
            <label class="text-start d-flex">Email</label>
            <div class="form-floating col-12 mb-2">
              <input
                id="email"
                type="email"
                name="email"
                class="form-control"
                placeholder="name@example.com"
                required
              >
              <label for="name">Email</label>
            </div>
            <div class="form-group">
              <label
                for="name"
                class="text-start d-flex justify-self-start"
              >Message</label>
              <textarea
                class="form-control"
                name="message"
                rows="10"
                required
              />
            </div>
           
            <div class="text-center my-3  d-flex justify-self-end">
              <button
                type="submit"
                class="btn btn-outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<script>
export default {};
</script>

<style scoped>
 .contact-icon {
            border-radius: 50%;
            margin-right: 1em;
        }

        .contact-container .contact-icon:hover svg {
            color: #FFF7E5;
        }

        .contact-icon svg {
            padding: 5px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #ff5e6c;
        }
</style>
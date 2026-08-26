document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENU MOBILE
    ====================================================== */

    const menuMobile = document.querySelector(".menu-mobile");
    const nav = document.querySelector(".header nav");

    if (menuMobile && nav) {

        menuMobile.addEventListener("click", function () {

            nav.classList.toggle("active");

            menuMobile.classList.toggle("active");

        });

    }


    /* =====================================================
       FECHAR MENU AO CLICAR EM UM LINK
    ====================================================== */

    const navLinks = document.querySelectorAll(".header nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuMobile) {
                menuMobile.classList.remove("active");
            }

        });

    });


    /* =====================================================
       SCROLL SUAVE
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ANIMAÇÃO FADE-UP
    ====================================================== */

    const fadeElements = document.querySelectorAll(".fade-up");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        fadeElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        fadeElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       HEADER AO ROLAR
    ====================================================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =====================================================
       FORMULÁRIO DE CONTATO
    ====================================================== */

    const contatoForm = document.querySelector(".contato-form");

    if (contatoForm) {

        contatoForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nome = contatoForm.querySelector(
                'input[type="text"]'
            );

            const email = contatoForm.querySelector(
                'input[type="email"]'
            );

            const telefone = contatoForm.querySelector(
                'input[type="tel"]'
            );

            const mensagem = contatoForm.querySelector(
                "textarea"
            );

            if (
                !nome ||
                !email ||
                !telefone ||
                !mensagem
            ) {
                return;
            }

            const texto =
                "Olá! Meu nome é " +
                nome.value +
                ".%0A%0A" +
                "E-mail: " +
                email.value +
                "%0A" +
                "Telefone: " +
                telefone.value +
                "%0A%0A" +
                "Mensagem:%0A" +
                mensagem.value;

            const whatsapp =
                "https://api.whatsapp.com/send?phone=5533999892648&text=" +
                texto;

            window.open(
                whatsapp,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }


    /* =====================================================
       NEWSLETTER
    ====================================================== */

    const newsletterForm =
        document.querySelector(".footer-newsletter form");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    newsletterForm.querySelector(
                        'input[type="email"]'
                    );

                if (!email || !email.value) {
                    return;
                }

                alert(
                    "Obrigado! Seu e-mail foi cadastrado."
                );

                email.value = "";

            }
        );

    }

});

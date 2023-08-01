<><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Observer.min.js"></script><script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@latest/bundled/lenis.js"></script><script>
  // Velocity Marquee initialization
    function initVelocityMarquee() {let} object = {value}: 1
    };

    let tl = gsap.timeline({repeat}: -1,
    onReverseComplete: () => {tl.progress(1)};
    }
    });
    tl.fromTo(
    ".marquee_track",
    {xPercent}: 0
    },
    {xPercent}: -50,
    duration: 120,
    ease: "none"
    }
    );

    Observer.create({target}: window,
    type: "wheel,scroll,touch",
    onChangeY: (self) => {let} v = self.velocityY * 0.006;
    v = gsap.utils.clamp(-60, 60, v);
    tl.timeScale(v);
    let resting = 1;
    if (v < /> 0) {resting = -1};
    }
    gsap.fromTo(
    object,
    {value}: v },
    {value}: resting,
    duration: 1,
    onUpdate: () => {tl.timeScale(object.value)};
    }
    }
    );
    }
    });

    return tl;
    }

    // Reset Velocity Marquee
    function resetVelocityMarquee(tl) {tl.restart()};
    }

    // Reset Webflow components
    function resetWebflow() {window.Webflow && window.Webflow.destroy()};
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    }

    // Reset Velocity Marquee and Webflow components
    function resetMarqueeAndWebflowComponents(data, tl) {resetVelocityMarquee(tl)};
    resetWebflow();
    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, "text/html");
    let webflowPageId = $(dom).find("html").attr("data-wf-page");
    $("html").attr("data-wf-page", webflowPageId);
    }

    // Initialize Velocity Marquee
    let tl = initVelocityMarquee();


</script>< /></></>!-- CMS HOVER -->

  <><script>
// CMS LIST SYNC POWER-UP
    window.addEventListener("DOMContentLoaded", (event) => {
      // attribute value checker
      function attr(defaultVal, attrVal) {
        const defaultValType = typeof defaultVal;
        if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
        if (attrVal === "true" && defaultValType === "boolean") return true;
        if (attrVal === "false" && defaultValType === "boolean") return false;
        if (isNaN(attrVal) && defaultValType === "string") return attrVal;
        if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
        return defaultVal;
      }
      // cms list sync component
    }
  // cms list sync component
    $("[tr-listsync-element='component']").each(function (index) {let} componentEl = $(this),
    cmsListEl = componentEl.find("[tr-listsync-element='list']"),
    cmsItemEl = cmsListEl.children();
    let onLoadSetting = attr(false, componentEl.attr("tr-listsync-onload")),
    activeIndexSetting = attr(0, componentEl.attr("tr-listsync-activeindex")),
    activeClassSetting = attr("is-active", componentEl.attr("tr-listsync-activeclass"));
    function addActive(trigger) {cmsItemEl.removeClass(activeClassSetting)};
    let itemIndex = trigger.index();
    cmsListEl.each(function () {$(this).children().eq(itemIndex).addClass(activeClassSetting)};
    });
    }
    if (onLoadSetting) addActive(cmsItemEl.eq(activeIndexSetting));
    cmsListEl.each(function () {let} childrenItemEl = $(this).children(),
    clickSetting = attr(true, $(this).attr("tr-listsync-click")),
    hoverInSetting = attr(false, $(this).attr("tr-listsync-hoverin")),
    hoverOutSetting = attr(false, $(this).attr("tr-listsync-hoverout"));
    if (clickSetting) {childrenItemEl.on("click", function () {
      addActive($(this));
    })};
    }
    if (hoverInSetting) {childrenItemEl.on("mouseenter", function () {
      addActive($(this));
    })};
    }
    if (hoverOutSetting) {childrenItemEl.on("mouseleave", function () {
      cmsItemEl.removeClass(activeClassSetting);
    })};
    }
    });
    });
    });
  </script><script>
      $(".work_link").each(function (index) {let} listOne = $(this).find(".work_title.is-1 .char");
      let listTwo = $(this).find(".work_title.is-2 .char");
      // Timeline
      let tl = gsap.timeline({paused}: true });
      tl.to(listOne, {translateY}: "-0.2em",
      rotationY: "-5.7deg",
      rotationX: "-90deg",
      stagger: {each}: 0.08 },
      ease: "power3.inOut",
      duration: 0.7
      });
      tl.from(
      listTwo,
      {translateY}: "0.2em",
      rotationY: "5.7deg",
      rotationX: "90deg",
      stagger: {each}: 0.08 },
      ease: "power3.inOut",
      duration: 0.7
      },
      0.1
      );
      $(this).on("mouseenter", function () {tl.restart()};
      });
      $(this).on("mouseleave", function () {tl.reverse()};
      });
      });
    </script><script>
      document.addEventListener('DOMContentLoaded', () => {document.querySelectorAll('.marquee_item').forEach(trigger => {
        trigger.addEventListener('mouseover', function () {
          document.querySelectorAll('.home-title').forEach(target => target.classList.add('is-active'));
          document.querySelectorAll('.home-subtitle').forEach(target => target.classList.add('is-active'));
        });
      })};

      document.querySelectorAll('.marquee_item').forEach(trigger => {trigger.addEventListener('mouseout', function () {
        document.querySelectorAll('.home-title').forEach(target => target.classList.remove('is-active'));
        document.querySelectorAll('.home-subtitle').forEach(target => target.classList.remove('is-active'));
      })};
      });
      });
    </script>

<!-- Lenis smooth scroll -->

<script>
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<script>
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: true
});
  
    // Hero Image Scale
$(".section-projects_intro").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".projects-hero-image");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom top-=30%",
      scrub: 0
    }
  });
  tl.to(targetElement, {
    scale: 1.4,
    yPercent: 30,
  });
  
});
        
</script>

<!-- GSAP Horizontal Scroll -->

<script>
// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural
function setTrackHeights() {
  $(".section-height").each(function (index) {
    let trackWidth = $(this).find(".track").outerWidth();
    $(this).height(trackWidth);
  });
}
setTrackHeights();
window.addEventListener("resize", function () {
  setTrackHeights();
});
</script>

<script>
// Horizontal scroll
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-height",
      start: "top top",
      end: "98% bottom",
      scrub: 1
    }
  })
  .to(".track", {
    xPercent: -100,
    ease: "none"
  });

// hero photo
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-panel",
      containerAnimation: tlMain,
      start: "left left",
      end: "right left",
      scrub: true
    }
  })
  .to(".hero-panel_img", { scale: 1.6 }, 0);

// note
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".note-panel",
      containerAnimation: tlMain,
      start: "left right",
      end: "left left",
      scrub: true
    }
  })
  .from(".note-panel_img", { rotate: 45, scale: 0.3 });
  
  // wide panel
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wide-panel",
      containerAnimation: tlMain,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .from(".wide-panel_img", { scale: 1.4 }, 0);
 

// thanks
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".thanks-panel_wrap",
      containerAnimation: tlMain,
      start: "left left",
      end: "right right",
      scrub: true
    }
  })
  .to(".thanks-panel", { xPercent: 100, ease: "none" })
  .to(".thanks-panel_photo", { scale: 1 }, 0)
  .fromTo(
    ".thanks-panel_contain.is-2",
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  );

// stagger photos
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".stagger-panel",
      containerAnimation: tlMain,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .from(".stagger-panel_img", { x: "100vw", stagger: { each: 0.05 } })
  .to(".stagger-panel_img", { scale: 0.5, stagger: { each: 0.05 } });
  
  // stagger photos 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".stagger-panel-2",
      containerAnimation: tlMain,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .from(".stagger-panel-2_img", { x: "100vw", stagger: { each: 0.05 } })
  .to(".stagger-panel-2_img", { scale: 0.5, stagger: { each: 0.05 } });
  
  // stagger photos
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".details-panel",
      containerAnimation: tlMain,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .from(".project_details-image-wrapper", { x: "100vw", stagger: { each: 0.05 } })
  .to(".project_details-image-wrapper", { scale: 0.5, stagger: { each: 0.05 } });
  
</script>

<script>
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .line', {
  y: '100%',
  opacity: 0,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: '[animate]',
    start: 'top center',
    
  }
})
</script>

<script>
// PROJECT LINK -----------------------------

let imageTL = gsap.timeline({
  paused: true
});
imageTL.to(".footer_image", {
  y: "0vh",
  x: "0vw",
  duration: 0.8,
  ease: "power1.out",
  invalidateOnRefresh: true,
  onReverseComplete: clearStyles,
  stagger: {
    each: 0.25,
    from: "start"
  }
});
let linkTL = gsap.timeline({
  paused: true,
  clearProps: "all"
});
linkTL
.to(".footer_pill", {
  width: "100%",
  duration: 0.4,
  ease: "power1.out",
  onReverseComplete: clearStyles
})
.to(".footer_pill-arrow-side", {
  x: "-100%",
  duration: 0.4,
  ease: "power1.out",
  onReverseComplete: clearStyles
});



function clearStyles() {
  for (var i = 0; i < this.targets().length; i++) {
    gsap.set(this.targets()[i], { clearProps: "all" });
  }
}

$(".footer_pill").on("mouseenter", function () {
  imageTL.timeScale(1);
  imageTL.restart();
  linkTL.restart();
});
$(".footer_pill").on("mouseleave", function () {
  imageTL.timeScale(1.5);
  if (imageTL.progress() === 1) {
    setTimeout(() => {
      imageTL.timeScale(2.4);
      imageTL.reverse();
    }, 600);
  } else {
    imageTL.reverse();
  }
  linkTL.reverse();
});

// EMAIL LINK -------------------------------------

let emailTL = gsap.timeline({
  paused: true
});
emailTL
  .to(".hello", {
    x: "6.9em",
    duration: 0.4,
    ease: "power1.out"
  })
  .to(
    ".footer_link-arrow-side",
    {
      x: "100%",
      duration: 0.4,
      ease: "power1.out"
    },
    0
  )
  .to(
    ".footer_link-arrow-top",
    {
      y: "0%",
      duration: 0.4,
      ease: "power1.out"
    },
    0
  );

$(".footer_link").on("mouseenter", function () {
  emailTL.restart();
});
$(".footer_link").on("mouseleave", function () {
  emailTL.reverse();
});

let windowWidth = window.innerWidth;
window.addEventListener("resize", function () {
  if (window.innerWidth !== windowWidth) {
    windowWidth = window.innerWidth;
    imageTL.invalidate();
  }
});
</script>
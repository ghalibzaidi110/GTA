import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import styled from 'styled-components';

// Import the logo data
const logoData = "M486.348 213C484.148 213 482.848 211.9 482.448 209.7L439.848 6.89999L439.548 5.69999C439.548 3.89999 440.648 2.99999 442.848 2.99999H489.348C491.748 2.99999 493.048 4.09999 493.248 6.3L510.348 126C510.548 126.8 510.848 127.2 511.248 127.2C511.848 127 512.148 126.6 512.148 126L528.048 6.3C528.248 4.09999 529.548 2.99999 531.948 2.99999H577.248C579.848 2.99999 580.848 4.29999 580.248 6.89999L537.348 209.7C536.948 211.9 535.648 213 533.448 213H486.348ZM600.006 213C599.006 213 598.106 212.7 597.306 212.1C596.706 211.3 596.406 210.4 596.406 209.4V6.59999C596.406 5.59999 596.706 4.79999 597.306 4.19999C598.106 3.39999 599.006 2.99999 600.006 2.99999H642.606C643.606 2.99999 644.406 3.39999 645.006 4.19999C645.806 4.79999 646.206 5.59999 646.206 6.59999V209.4C646.206 210.4 645.806 211.3 645.006 212.1C644.406 212.7 643.606 213 642.606 213H600.006ZM727.312 215.4C708.312 215.4 693.112 209.8 681.712 198.6C670.312 187.4 664.612 172.5 664.612 153.9V61.8C664.612 43 670.312 28.1 681.712 17.1C693.112 6.09999 708.312 0.599999 727.312 0.599999C746.312 0.599999 761.512 6.09999 772.912 17.1C784.512 28.1 790.312 43 790.312 61.8V64.5C790.312 65.5 789.912 66.4 789.112 67.2C788.512 67.8 787.712 68.1 786.712 68.1L744.112 69.9C741.712 69.9 740.512 68.7 740.512 66.3V58.2C740.512 53.6 739.312 50 736.912 47.4C734.512 44.6 731.312 43.2 727.312 43.2C723.512 43.2 720.412 44.6 718.012 47.4C715.612 50 714.412 53.6 714.412 58.2V158.1C714.412 162.5 715.612 166.1 718.012 168.9C720.412 171.5 723.512 172.8 727.312 172.8C731.312 172.8 734.512 171.5 736.912 168.9C739.312 166.1 740.512 162.5 740.512 158.1V149.4C740.512 148.4 740.812 147.6 741.412 147C742.212 146.2 743.112 145.8 744.112 145.8L786.712 147.6C787.712 147.6 788.512 148 789.112 148.8C789.912 149.4 790.312 150.2 790.312 151.2V153.9C790.312 172.5 784.512 187.4 772.912 198.6C761.512 209.8 746.312 215.4 727.312 215.4ZM923.13 42C923.13 43 922.73 43.9 921.93 44.7C921.33 45.3 920.53 45.6 919.53 45.6H859.23C858.23 45.6 857.73 46.1 857.73 47.1V84.9C857.73 85.9 858.23 86.4 859.23 86.4H892.23C893.23 86.4 894.03 86.8 894.63 87.6C895.43 88.2 895.83 89 895.83 90V125.7C895.83 126.7 895.43 127.6 894.63 128.4C894.03 129 893.23 129.3 892.23 129.3H859.23C858.23 129.3 857.73 129.8 857.73 130.8V168.9C857.73 169.9 858.23 170.4 859.23 170.4H919.53C920.53 170.4 921.33 170.8 921.93 171.6C922.73 172.2 923.13 173 923.13 174V209.4C923.13 210.4 922.73 211.3 921.93 212.1C921.33 212.7 920.53 213 919.53 213H811.53C810.53 213 809.63 212.7 808.83 212.1C808.23 211.3 807.93 210.4 807.93 209.4V6.59999C807.93 5.59999 808.23 4.79999 808.83 4.19999C809.63 3.39999 810.53 2.99999 811.53 2.99999H919.53C920.53 2.99999 921.33 3.39999 921.93 4.19999C922.73 4.79999 923.13 5.59999 923.13 6.59999V42Z";

// Styled components
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: "DM Sans", sans-serif;
  background: #111117;
  color: #fff;
  overflow-x: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    text-transform: uppercase;
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: -0.2rem;
    line-height: 0.8;
  }

  p {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 0.8;
  }
`;

const LogoSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #111117;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  z-index: 2;
  transform-origin: center center;
`;

const SVGOverlay = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150vh;
  z-index: 1;
  transform-origin: center center;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #111117;
  text-align: center;
  overflow: hidden;
`;

const HeroImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: center center;
`;

const HeroImgLogo = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 250px;
  height: auto;
  object-fit: contain;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HeroImgCopy = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
  will-change: opacity;
  opacity: 0;

  p {
    font-size: 0.65rem;
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  will-change: opacity;
  opacity: 0;
`;

const OverlayCopy = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 2;
  width: 100%;
  opacity: 0;

  h1 {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    transform-origin: center 0%;
  }

  @media (max-width: 900px) {
    width: 100%;
    
    h1 {
      font-size: 2rem;
      letter-spacing: 0;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ContentSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #111117;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const GTA: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const svgOverlayRef = useRef<SVGSVGElement>(null);
  const logoMaskRef = useRef<SVGPathElement>(null);
  const heroImgContainerRef = useRef<HTMLDivElement>(null);
  const heroImgLogoRef = useRef<HTMLDivElement>(null);
  const heroImgCopyRef = useRef<HTMLDivElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);
  const overlayCopyRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const initialOverlayScale = 500;

    const updateLogoMask = () => {
      if (!logoContainerRef.current || !logoMaskRef.current) return;

      const logoDimensions = logoContainerRef.current.getBoundingClientRect();
      const logoBoundingBox = logoMaskRef.current.getBBox();

      const horizontalScaleRatio = logoDimensions.width / logoBoundingBox.width;
      const verticalScaleRatio = logoDimensions.height / logoBoundingBox.height;
      const logoScaleFactor = Math.min(horizontalScaleRatio, verticalScaleRatio);

      const logoHorizontalPosition =
        logoDimensions.left +
        (logoDimensions.width - logoBoundingBox.width * logoScaleFactor) / 2 -
        logoBoundingBox.x * logoScaleFactor;
      const logoVerticalPosition =
        logoDimensions.top +
        (logoDimensions.height - logoBoundingBox.height * logoScaleFactor) / 2 -
        logoBoundingBox.y * logoScaleFactor;

      logoMaskRef.current.setAttribute(
        "transform",
        `translate(${logoHorizontalPosition}, ${logoVerticalPosition}) scale(${logoScaleFactor})`
      );
    };

    updateLogoMask();

    // Initial setup
    if (svgOverlayRef.current) {
      gsap.set(svgOverlayRef.current, {
        transformOrigin: "50% 50%",
        xPercent: 0,
        yPercent: 0,
        left: 0,
        top: 0,
        scale: initialOverlayScale,
      });
    }

    // Logo zoom and fade animation
    const logoScrollTrigger = ScrollTrigger.create({
      trigger: ".logo-section",
      start: "top top",
      end: "+=100vh",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        
        // Logo zoom in effect
        if (logoContainerRef.current) {
          const logoScale = 1 + scrollProgress * 2; // Scale from 1 to 3
          gsap.set(logoContainerRef.current, {
            scale: logoScale,
          });
        }

        // Logo fade out
        if (scrollProgress >= 0.5) {
          const fadeProgress = (scrollProgress - 0.5) * 2; // Fade from 0.5 to 1
          gsap.set(logoContainerRef.current, {
            opacity: 1 - fadeProgress,
          });
        }

        // SVG overlay scale down
        if (svgOverlayRef.current) {
          const overlayScale = initialOverlayScale * (1 - scrollProgress * 0.8);
          gsap.set(svgOverlayRef.current, {
            scale: overlayScale,
          });
        }
      },
    });

    // Hero section reveal animation
    const heroScrollTrigger = ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top center",
      end: "+=100vh",
      scrub: 1,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        
        // Hero image container scale up from center
        if (heroImgContainerRef.current) {
          const heroScale = scrollProgress * 1.5; // Scale from 0 to 1.5
          gsap.set(heroImgContainerRef.current, {
            scale: heroScale,
          });
        }

        // Hero logo and copy fade in
        if (scrollProgress >= 0.3) {
          const fadeProgress = Math.min(1, (scrollProgress - 0.3) * 2);
          gsap.set([heroImgLogoRef.current, heroImgCopyRef.current], {
            opacity: fadeProgress,
          });
        }

        // Fade overlay
        if (scrollProgress >= 0.6) {
          const fadeProgress = Math.min(1, (scrollProgress - 0.6) * 2.5);
          if (fadeOverlayRef.current) {
            gsap.set(fadeOverlayRef.current, {
              opacity: fadeProgress,
            });
          }
        }

        // Overlay copy reveal
        if (scrollProgress >= 0.7) {
          const overlayCopyRevealProgress = Math.min(1, (scrollProgress - 0.7) * 3);

          const gradientSpread = 100;
          const gradientBottomPosition = 240 - overlayCopyRevealProgress * 280;
          const gradientTopPosition = gradientBottomPosition - gradientSpread;
          const overlayCopyScale = 1.25 - 0.25 * overlayCopyRevealProgress;

          if (overlayCopyRef.current) {
            overlayCopyRef.current.style.background = `linear-gradient(to bottom, #111117 0%, #111117 ${gradientTopPosition}%, #e66461 ${gradientBottomPosition}%, #e66461 100%)`;
            overlayCopyRef.current.style.backgroundClip = "text";
            overlayCopyRef.current.style.webkitBackgroundClip = "text";

            gsap.set(overlayCopyRef.current, {
              scale: overlayCopyScale,
              opacity: overlayCopyRevealProgress,
            });
          }
        }
      },
    });

    const handleResize = () => {
      updateLogoMask();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      logoScrollTrigger.kill();
      heroScrollTrigger.kill();
      lenis.destroy();
    };
  }, []);

  return (
    <Container>
      <LogoSection className="logo-section">
        <LogoContainer ref={logoContainerRef}>
          <SVGOverlay ref={svgOverlayRef}>
            <defs>
              <mask id="logoMask">
                <path ref={logoMaskRef} d={logoData} fill="white" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="#111117" mask="url(#logoMask)" />
          </SVGOverlay>
        </LogoContainer>
      </LogoSection>

      <HeroSection className="hero-section">
        <HeroImgContainer ref={heroImgContainerRef}>
          <img src="/hero-img-layer-1.jpg" alt="Hero background" />
        </HeroImgContainer>
        <HeroImgLogo ref={heroImgLogoRef}>
          <img src="/logo.png" alt="GTA VI Logo" />
        </HeroImgLogo>
        <HeroImgCopy ref={heroImgCopyRef}>
          <p>COMING 2025</p>
        </HeroImgCopy>
        <FadeOverlay ref={fadeOverlayRef} />
        <OverlayCopy>
          <h1 ref={overlayCopyRef}>GRAND THEFT AUTO VI</h1>
        </OverlayCopy>
      </HeroSection>

      <ContentSection>
        <div>
          <h1>Welcome to Los Santos</h1>
          <p>Experience the next chapter in the Grand Theft Auto series</p>
        </div>
      </ContentSection>
    </Container>
  );
};

export default GTA; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageNav from '../../components/LandingPageNav/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter/LandingPageFooter';
import DemoModal from '../../demo/demo-components/DemoModal/DemoModal'
import './LandingPage.css';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;

  const navigate = useNavigate();

  function handleScreenCheck() {
    if (screenHeight <= 1024 || screenWidth <= 1366){
      setShowModal(true);
    } else {
      navigate(`/demo`);
    }
  }

  function handleModalButtonClick() {
      setShowModal(false);
      navigate(`/demo`);
  }

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="hero">
          <div class="px-4 pt-5 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold">Welcome to KnowNative</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead my-4">Ditch the textbooks and learn from real native speakers by studying articles written by real native speakers. Learning with KnowNative is like building your own study guide designed specifically for you.</p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-5">
                <button className="btn btn-lg px-4 me-sm-3 demo-button" onClick={handleScreenCheck}>Demo</button>
                <a href="https://github.com/AbigailDawson/knownative" target="_blank" rel="noopener noreferrer" className="btn btn-lg px-4 github-button">GitHub</a>
              </div>
            </div>
            <div class="overflow-hidden" style={{maxHeight: 30 + 'vh'}}>
              <div class="container px-5">
                <img src="/images/landing-image.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="KnowNative app" width="700" height="500" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section className="mailing-list">
          <div class="container mx-auto px-4 py-5">
            <div class=" g-lg-5 py-5">
              <div class="d-flex flex-column align-items-center text-lg-start px-5 mx-4">
                <h1 class="text-center display-6 fw-bold lh-1 mb-5">Sign up for early access</h1>
                <iframe class="early-access-form mb-5" title="early-access-form" src="https://embeds.beehiiv.com/512b2f32-1ccd-4254-b0ef-9514515f60d6?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" ></iframe>
                <p class="text-center fs-5">We are planning to release a beta version of KnowNative in spring of 2025!</p>
                <p class="text-center fs-5">As an early access member of KnowNative, you'll be able to create an account and <strong>build your own personalized study portal</strong>, uploading any article you'd like to learn from. Your articles, vocabulary lists and notes will all be saved so you'll never have to worry about losing your progress.</p>
                <p class="text-center fs-5">Sign up to be notified when this beta version is released for a unique opportunity to be one of KnowNative's first members!</p>
              </div>
            </div>
          </div>
        </section>
        <LandingPageFooter />
        {showModal ? (
          <DemoModal hasCloseBtn={false} isOpen={showModal} onClose={() => setShowModal(false)} hasEscKey={false} >
            <div className='landing-page-modal-content'>
              <h1 className='landing-page-modal-content-header'>KnowNative is not optimized for mobile devices!</h1>
              <div>
                Please consider using KnowNative on your desktop device until our mobile version is available.</div>
            </div>
            <div className='button-div'>
              <button className='demo-button continue' onClick={handleModalButtonClick}>Continue Anyway</button>
              <button className='back' onClick={() => setShowModal(false)}>Back</button>
            </div>
          </DemoModal>): null }
      </div>
    </>
  );
};
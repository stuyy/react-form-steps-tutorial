import { ContactForm } from '../components/ContactForm';
import { EmailForm } from '../components/EmailForm';
import { MobileForm } from '../components/MobileForm';
import { ReviewFormDetails } from '../components/ReviewFormDetails';
import { STEPS } from './constants';

export const getCurrentForm = (step) => {
  switch (step) {
    case STEPS.CONTACT:
      return <ContactForm />;
    case STEPS.EMAIL:
      return <EmailForm />;
    case STEPS.MOBILE:
      return <MobileForm />;
    case STEPS.REVIEW:
      return <ReviewFormDetails />;
    case STEPS.SUCCESS:
      return <h1>Success</h1>;
    case STEPS.ERROR:
      return <h1>Error</h1>;
    default:
      return <h1>Invalid Step. Please refresh the page</h1>;
  }
};

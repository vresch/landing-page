import { PopupModal } from 'react-calendly';
import { useCalendarModalContext } from 'contexts/calendar-modal.context';
import useEscClose from 'hooks/useEscKey';


export interface CalendarModalProps {
  onClose: () => void;
}

export default function CalendarModal({ onClose }: CalendarModalProps) {
  useEscClose({ onClose });
  const { isModalOpened, setIsModalOpened } = useCalendarModalContext();


  return (
          <PopupModal
            url="https://calendly.com/max-vresch/ai-web-development"
            onModalClose={() => setIsModalOpened(false)}
            open={isModalOpened}
            /*
              * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
              * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
              */
            rootElement={document.body}
          />
  )
}

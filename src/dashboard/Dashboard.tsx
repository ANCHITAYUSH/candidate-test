import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutHeader, EuiIcon, EuiLoadingSpinner, EuiText } from "@elastic/eui"
import { staticImages } from '../shared/images'
import { useEffect, useState } from "react";
import axios from 'axios';
import Form from "src/components/form/Form";
import Notification from '../components/notification/Notification';

/**
 * Dashboard Component
 * 
 * Main page displaying four interactive cards using Elastic UI (EUI):
 * - Random number generator
 * - Flyout with dynamic form
 * - External API feed (cat fact)
 * - Success toast notification
 *
 * @component
 */
function Dashboard() {
 
  // #region State

  /** Random number between 1-100, displayed on the first card */
  const [randomNumber, setRandomNumber] = useState<number>(generateRandomNumber());

  /** Controls the visibility of the Flyout containing the form */
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);

  /** Stores the fetched cat fact string */
  const [catFact, setCatFact] = useState<string>('');

  /** Loading state while fetching external cat fact API */
  const [loading, setLoading] = useState<boolean>(false);

  /** Controls the visibility of the success toast notification */
  const [isToastVisible, setIsToastVisible] = useState(false);

  /** Data text updated dynamically when success toast shows */
  const [data, setData] = useState("No Data Yet");

  // #endregion

  // #region Lifecycle

  /**
   * Lifecycle hook: Fetches a cat fact on mount.
   * Sets an interval to update random number every 5 seconds.
   */
  useEffect(() => {
    fetchCatFact();

    const interval = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // #endregion

  // #region Handlers

  /**
   * Handles click on the Random Number card to refresh number immediately.
   */
  const handleRandomNumberCardClick = () => {
    setRandomNumber(generateRandomNumber());
  };

  /**
   * Generates a random integer between 1 and 100.
   *
   * @returns {number} Random integer
   */
  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  /**
   * Opens the Flyout component to display the dynamic form.
   */
  const openFlyout = () => setIsFlyoutOpen(true);

  /**
   * Closes the Flyout component.
   */
  const closeFlyout = () => setIsFlyoutOpen(false);

  /**
   * Fetches a random cat fact from external API.
   * Handles loading and error states.
   */
  const fetchCatFact = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://catfact.ninja/fact');
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setCatFact('Failed to fetch a cat fact.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Shows the toast notification and updates dynamic data.
   */
  const showToast = (newData: string) => {
    setData(newData);
    setIsToastVisible(true);
  };

  /**
   * Closes the toast notification.
   */
  const closeToast = () => setIsToastVisible(false);

  // #endregion

  // #region Render

  return <> 
    {isToastVisible && (
      <Notification closeToast={closeToast} message={data}/>
    )}

    <EuiFlexGroup gutterSize="l" style={{ marginTop: '1rem' }}>
      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoBeats`} />}
          title={`Random Number Card`}
          description={`Number: ${randomNumber}`}
          onClick={handleRandomNumberCardClick}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoCloud`} />}
          title={`Flyout Form`}
          description="When clicked flyout a form with 2 input fields and submit button"
          onClick={openFlyout}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoLogging`} />}
          title={`External Feed`}
          // description="Replace the text here with a random fact from the following feed (https://catfact.ninja/fact) on load and when clicked."
          description={loading ? <EuiLoadingSpinner size="m" /> : catFact}
          onClick={fetchCatFact}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoKibana`} />}
          title={`Notifications`}
          description="When clicked pop up a success toast notifcation"
          onClick={() =>showToast("It is a success notification!")}
        />
      </EuiFlexItem>
    </EuiFlexGroup>

    {isFlyoutOpen && (
      <EuiFlyout onClose={closeFlyout} size="s" ownFocus>
        <EuiFlyoutHeader>
          <h2>Dynamic Form</h2>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <Form closeFlyout={closeFlyout} />
        </EuiFlyoutBody>
      </EuiFlyout>
    )}

    <EuiText style={{ marginTop: '2rem' }}>
      <p>Use the following UI library <a href="https://eui.elastic.co/v34.6.0/" target="_blank">eui.elastic.co</a> to form part of your solution</p>

      <p>Bonus challenge. Using the following <a href={staticImages.design} target="_blank">design</a>, retheme the site similarly to that found in the design, utilising the same colour palettes and look and feel. </p>
    </EuiText>
  </>

   // #endregion
}

export default Dashboard
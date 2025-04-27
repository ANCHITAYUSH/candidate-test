import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutHeader, EuiIcon, EuiLoadingSpinner, EuiText } from "@elastic/eui"
import { staticImages } from '../shared/images'
import { useEffect, useState } from "react";
import axios from 'axios';
import Form from "src/components/form/Form";
import Notification from '../components/notification/Notification';

function Dashboard() {
 
  const [randomNumber, setRandomNumber] = useState<number>(generateRandomNumber());
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [catFact, setCatFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [data, setData] = useState("No Data Yet");

  useEffect(() => {
    fetchCatFact(); // Fetch once when component mounts

    const interval = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 5000); // every 5 seconds

    return () => clearInterval(interval); // Cleanup when unmounted
  }, []);

  const handleRandomNumberCardClick = () => {
    setRandomNumber(generateRandomNumber()); // Refresh immediately on click
  };

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  const openFlyout = () => setIsFlyoutOpen(true);
  const closeFlyout = () => setIsFlyoutOpen(false);

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

  const showToast = () => {
    setData("Data Updated Dynamically!");
    setIsToastVisible(true);
  };

  const closeToast = () => setIsToastVisible(false);

  return <> 
    {isToastVisible && (
      <Notification closeToast={closeToast} />
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
          onClick={showToast}
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
}

export default Dashboard
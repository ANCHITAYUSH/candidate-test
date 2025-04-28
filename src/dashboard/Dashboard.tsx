import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutHeader, EuiIcon, EuiLoadingSpinner, EuiText } from "@elastic/eui"
import { staticImages } from '../shared/images'
import { useEffect, useState } from "react";
import axios from 'axios';
import Form from "src/components/form/Form";
import Notification from '../components/notification/Notification';
import "./Dashboard.scss";

function Dashboard() {
 
  const [randomNumber, setRandomNumber] = useState<number>(generateRandomNumber());
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [catFact, setCatFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [data, setData] = useState("No Data Yet");

  useEffect(() => {
    fetchCatFact();

    const interval = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  const handleRandomNumberCardClick = () => {
    setRandomNumber(generateRandomNumber()); 
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

  const showToast = (newData: string) => {
    setData(newData);
    setIsToastVisible(true);
  };

  const closeToast = () => setIsToastVisible(false);

  return <div className="container"> 
    {isToastVisible && (
      <Notification closeToast={closeToast} message={data}/>
    )}

    <EuiFlexGroup gutterSize="l" style={{ margin: '1rem' }}>
      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoBeats`} />}
          title={`Random Number Card`}
          description={`Number: ${randomNumber}`}
          onClick={handleRandomNumberCardClick}
          className={"card-style"}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoCloud`} />}
          title={`Flyout Form`}
          description="When clicked flyout a form with 2 input fields and submit button"
          onClick={openFlyout}
          className={"card-style"}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoLogging`} />}
          title={`External Feed`}
          description={loading ? <EuiLoadingSpinner size="m" /> : catFact}
          onClick={fetchCatFact}
          className={"card-style"}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoKibana`} />}
          title={`Notifications`}
          description="When clicked pop up a success toast notifcation"
          onClick={() => showToast("It is a success notification!")}
          className={"card-style"}
        />
      </EuiFlexItem>
    </EuiFlexGroup>

    {isFlyoutOpen && (
      <EuiFlyout onClose={closeFlyout} size="s" ownFocus>
        <EuiFlyoutHeader>
          <h2>Flyout Form</h2>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <Form closeFlyout={closeFlyout} />
        </EuiFlyoutBody>
      </EuiFlyout>
    )}

    <EuiText style={{ margin: '2rem' }}>
      <p>Use the following UI library <a href="https://eui.elastic.co/v34.6.0/" target="_blank">eui.elastic.co</a> to form part of your solution</p>

      <p>Bonus challenge. Using the following <a href={staticImages.design} target="_blank">design</a>, retheme the site similarly to that found in the design, utilising the same colour palettes and look and feel. </p>
    </EuiText>
  </div>
}

export default Dashboard
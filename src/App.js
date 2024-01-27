import './App.scss';

import Header from './HeaderComponent/Header';
import Grids from './GridComponents/Grids';

function App() {
  return (
    <>
    <div className='bg-content-background min-h-screen'>
      <Header />
      <div className='container mx-auto'>
        <Grids />
      </div>
    </div>
    </>
  );
}

export default App;


/*NOTES

ICONS TO BE ADDED
<PhoneCall size={32} weight="thin" />
<EnvelopeSimple size={32} weight="thin" />

<User size={32} weight="fill" />

// Try to make them duo-tone
Profile: <User size={32} weight="duotone" />
FD: <PiggyBank size={32} weight="duotone" />
Transactions: <Money size={32} weight="duotone" />
Logout: <SignOut size={32} weight="duotone" />
// Try to make them duo-tone

<CheckCircle size={32} weight="fill" />
<CaretRight size={32} weight="bold" />
<CaretLeft size={32} color="#6e6e6e" weight="bold" />
<CaretUp size={32} weight="bold" />
<CaretDown size={32} color="#6e6e6e" weight="bold" />

// Pie charts
https://www.chartjs.org/docs/latest/charts/doughnut.html#pie

*/
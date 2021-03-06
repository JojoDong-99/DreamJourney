import React from 'react';
import ActivitiesMap from '../components/ActivitiesMap/ActivitiesMap.component';
import CombinedPanel from '../components/CombinedPanel/CombinePanel.component';
import CombinedSummary from '../components/CombinedSummary/CombinedSummary.component';
import {
  TripDetailsContextProvider
} from './TripDetailsProvider';
import { withRouter } from 'react-router-dom';

const TripDetailsPage = (props) => {
  return (
    <div style={{ height: 2000 }}>
      <TripDetailsContextProvider>
        <ActivitiesMap />
        <CombinedPanel />
        <CombinedSummary />
      </TripDetailsContextProvider>
    </div>
  );
};

export default withRouter(TripDetailsPage);

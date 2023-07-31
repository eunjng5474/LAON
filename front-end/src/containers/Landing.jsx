import Landing from "../pages/landing/Landing";
import { connect } from 'react-redux';

export default connect(
  null,
  function(dispatch) {
    return {
      onSubmit: dispatch(
        {
          type: 'CREATE_PROCESS',
          gameId
        }
      )
    }
  }
)(Landing);
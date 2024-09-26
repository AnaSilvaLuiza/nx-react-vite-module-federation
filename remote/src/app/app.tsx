
// import { useState } from 'react';
import styles from './app.module.css';
import { Button } from '@olmero/common-ui';

export function App() {
  // const [openInviteModal, setOpenInviteModal] = useState<boolean>(false);

  return (
    <>
      <h1>Remote ALS Test 18</h1>
      <Button.Root> Invite</Button.Root>   

      {/* <InviteModal
        handleClose={() => setOpenInviteModal(false)}
        handleOpen={() => setOpenInviteModal(true)}
        open={openInviteModal}
      /> */}
    </>
  );
}

export default App;

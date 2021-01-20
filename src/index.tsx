import React from "react";
import ReactDOM from "react-dom";
import { ConnextModal } from "@connext/vector-modal";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Widget</button>
      <ConnextModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onReady={(params) => console.log("MODAL IS READY =======>", params)}
        withdrawalAddress={"0x75e4DD0587663Fce5B2D9aF7fbED3AC54342d3dB"}
        routerPublicIdentifier="vector7tbbTxQp8ppEQUgPsbGiTrVdapLdU5dH7zTbVuXRf1M4CEBU9Q"
        depositAssetId={"0xbd69fC70FA1c3AED524Bb4E82Adc5fcCFFcD79Fa"}
        depositChainId={5}
        depositChainProvider="https://goerli.infura.io/v3/"
        withdrawAssetId={"0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"}
        withdrawChainId={80001}
        withdrawChainProvider="https://rpc-mumbai.matic.today"
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

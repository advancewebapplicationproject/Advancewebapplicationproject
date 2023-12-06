import React from "react";
import BaseProtectedView from './baseProtectedView';

export default function ProtectedView2(props) {
  return (
    <BaseProtectedView {...props} />
    // Additional content specific to ProtectedView2 can be added here
  );
}

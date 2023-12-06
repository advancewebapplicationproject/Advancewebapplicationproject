import React from "react";
import BaseProtectedView from './baseProtectedView';

export default function ProtectedView1(props) {
  return (
    <BaseProtectedView {...props} />
    // Additional content specific to ProtectedView1 can be added here
  );
}

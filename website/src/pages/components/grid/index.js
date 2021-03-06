import React from "react";
import * as allDesignSystem from "basis";
import ComponentContainer from "../../../components/ComponentContainer";
import { formatCode } from "../../../utils/formatting";

const scope = allDesignSystem;

function GridPage() {
  const code = formatCode(`
    <Grid preset="page" rowsGap={4}>
      <Grid.Item colSpan="all">
        <Placeholder label="Header" height="32" />
      </Grid.Item>
      <Grid.Item colSpan="all" colSpan-lg="0-1" rowSpan-lg="1-2">
        <Placeholder label="Navigation" height="64" height-sm="32" height-lg="100%" />
      </Grid.Item>
      <Grid.Item colSpan="all" colSpan-sm="2-7" rowSpan-sm="2" colSpan-lg="2-9" rowSpan-lg="1-2">
        <Placeholder label="Main article area" height="160" />
      </Grid.Item>
      <Grid.Item colSpan="all" colSpan-sm="0-1" rowSpan-sm="2" colSpan-lg="10-11" rowSpan-lg="1">
        <Placeholder label="Sidebar" height="32" height-sm="100%" />
      </Grid.Item>
      <Grid.Item colSpan="all" colSpan-sm="0-1" rowSpan-sm="3" colSpan-lg="10-11" rowSpan-lg="2">
        <Placeholder label="Advertising" height="32" height-lg="100%" />
      </Grid.Item>
      <Grid.Item colSpan="all" colSpan-sm="2-7" rowSpan-sm="3" colSpan-lg="all">
        <Placeholder label="Footer" height="32" />
      </Grid.Item>
    </Grid>
  `);

  return (
    <ComponentContainer
      code={code}
      scope={scope}
      width="md"
      hasBodyMargin={false}
    />
  );
}

export default GridPage;

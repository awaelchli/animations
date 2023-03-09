import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import {CodeBlock, Rect, insert, edit, remove, lines} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';

import "../global.css"

// ffmpeg -i %06d.png -c:v libx264 -vf "fps=30" out.mp4

export default makeScene2D(function* (view) {
  // Create your animations here
  // yield view.add(
  //   // note that the ` bracket is followed by a new line
  //   <CodeBlock
  //     language="python"
  //     code={`
  //       from lightning import Fabric`}
  //   />,
  // );
  const codeRef = createRef<CodeBlock>();
  const rectRef = createRef<Rect>();

  // yield view.add(
  //   <CodeBlock
  //     ref={codeRef}
  //     language="python"
  //     code={`
  //       fabric = Fabric()`}
  //   />,
  // );
  // yield view.add(
  //   <Rect width={320} height={320} fill={'blue'} cornerSharpness={0.4} />
  // );
  yield view.add(
    <Rect ref={rectRef} grow={2} fill={'white'} radius={30} x={0} y={0} width={1640} height={400} 
      shadowColor={"#96AAB4"} shadowBlur={75}
      ></Rect>
  );
  yield view.add(
    <CodeBlock ref={codeRef} language='python' stockTheme='github-light' fontSize={68} code={`fabric = Fabric()`} />
  );
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(${insert('accelerator="cpu"')})`;
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(accelerator=${edit('"cpu"', '"gpu"')})`;
  yield * codeRef().edit(1.2, false)`fabric = Fabric(accelerator=${edit('"gpu"', '"cuda"')})`;
  yield * codeRef().edit(1.2, false)`fabric = Fabric(accelerator=${edit('"cuda"', '"mps"')})`;
  yield * codeRef().edit(1.2, false)`fabric = Fabric(accelerator=${edit('"mps"', '"tpu"')})`;
  yield * codeRef().edit(1.2, false)`fabric = Fabric(accelerator=${edit('"tpu"', '"auto"')})`;
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(${remove('accelerator="auto"')})`;
  yield * waitFor(1);
});

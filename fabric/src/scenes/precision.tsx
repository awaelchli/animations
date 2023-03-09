import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import {CodeBlock, Rect, insert, edit, remove, lines} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';

import "../global.css"

// ffmpeg -i %06d.png -c:v libx264 -vf "fps=30" out.mp4

export default makeScene2D(function* (view) {
  const codeRef = createRef<CodeBlock>();
  const rectRef = createRef<Rect>();

  yield view.add(
    <Rect ref={rectRef} grow={2} fill={'white'} radius={30} x={0} y={0} width={1640} height={400} 
      shadowColor={"#96AAB4"} shadowBlur={75}
      ></Rect>
  );
  yield view.add(
    <CodeBlock ref={codeRef} language='python' stockTheme='github-light' fontSize={68} code={`fabric = Fabric()`} />
  );
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(${insert('precision="32"')})`;
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(precision=${edit('"32"', '"16"')})`;
  yield * codeRef().edit(1.2, false)`fabric = Fabric(precision=${edit('"16"', '"bf16"')})`;
  yield * codeRef().edit(1.2, false)`fabric = Fabric(precision=${edit('"bf16"', '"64"')})`;
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(${remove('precision="64"')})`;
  yield * waitFor(1);
});

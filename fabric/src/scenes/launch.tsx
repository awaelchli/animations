import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import {CodeBlock, Rect, insert, edit, remove, lines} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';

import "../global.css"

// ffmpeg -i %06d.png -c:v libx264 -vf "fps=30" out.mp4

export default makeScene2D(function* (view) {
  const codeRef = createRef<CodeBlock>();
  const rectRef = createRef<Rect>();
  const waitDigits = 0.6

  yield view.add(
    <Rect ref={rectRef} grow={2} fill={'white'} radius={30} x={0} y={0} width={1640} height={400} 
      shadowColor={"#96AAB4"} shadowBlur={75}
      ></Rect>
  );
  yield view.add(
    <CodeBlock ref={codeRef} language='python' stockTheme='github-light' fontSize={56} code={`fabric = Fabric()`} />
  );
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(${insert('devices=1')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(waitDigits, false)`fabric = Fabric(devices=${edit('1', '2')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(waitDigits, false)`fabric = Fabric(devices=${edit('2', '4')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(waitDigits, false)`fabric = Fabric(devices=${edit('4', '8')})`;
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(devices=${edit('8', '"auto"')})`;
  yield * waitFor(1);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(devices="auto"${insert(', num_nodes=1')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(waitDigits, false)`fabric = Fabric(devices="auto", num_nodes=${edit('1', '2')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(waitDigits, false)`fabric = Fabric(devices="auto", num_nodes=${edit('2', '4')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(waitDigits, false)`fabric = Fabric(devices="auto", num_nodes=${edit('4', '8')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(devices="auto"${remove(', num_nodes=8')})`;
  yield * waitFor(0.5);
  yield * codeRef().edit(1.2, false)`fabric = Fabric(${remove('devices="auto"')})`;
  yield * waitFor(1);
});

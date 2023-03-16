import { useEffect, useState } from "react";

export default function LaptopScreen() {

    function RandomEmoji() {
        const emoji = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗'];
        return `Your Day will be: ${emoji[Math.floor(Math.random() * emoji.length)]}`
    }

    const text = ['pip install numpy', 'npm i create-react-app', 'pip install django']
    const [display, setDisplay] = useState(text[0])
    const [install, setInstall] = useState(true)

    useEffect(() => {
        setInstall(false)
        const timer = setTimeout(() => {
            setInstall(true);
          }, 5000);
      
          return () => clearTimeout(timer);
    }, [display])

  return (
    <div>
      <div className="pt-2">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>{display}</code>
          </pre>
          <pre data-prefix=">" className={install ? "text-success" : "text-warning"}>
            <code>{install ? 'installed ' : 'installing...'}</code>
          </pre>
          {install && <pre data-prefix=">" className="text-success">
            <code>Done ✅</code>
          </pre>}
        </div>
      </div>

      <div className="py-1 text-center">
        <div className="btn-group">
          <input type="radio" name="options" data-title="py" className="btn" onClick={() => setDisplay(text[0])} />
          <input type="radio" name="options" data-title="jsx" className="btn" onClick={() => setDisplay(text[1])}  />
          <input type="radio" name="options" data-title="dj" className="btn"  onClick={() => setDisplay(text[2])} />
          <input type="radio" name="options" data-title="😀" className="btn" onClick={() => setDisplay(RandomEmoji())}  />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './ImprintLoader.css';

const WORDMARK = 'IMPRINT';
const SUBMARK = 'GALLERIA';
 
export default function ImprintLoader({ label = 'Loading' }) {
  return (
    <div className="imprint-loader" role="status" aria-live="polite" aria-busy="true">
      <span className="imprint-loader__sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        {label}…
      </span>

      {/* Naya wrapper infinite spin ke liye */}
      <div className="imprint-loader__spin-wrapper">
        
        {/* Yeh box line aur phir circle mein transform hoga */}
        <div className="imprint-loader__morph-box">
          <div className="imprint-loader__mark" aria-hidden="true">
            <div className="imprint-loader__wordmark">
              {WORDMARK.split('').map((letter, index) => (
                <span
                  key={`imprint-${index}`}
                  className="imprint-loader__letter"
                  style={{ '--letter-index': index }}
                >
                  {letter}
                </span>
              ))}
            </div>

            <div className="imprint-loader__divider">
              <span className="imprint-loader__divider-line" />
            </div>

            <div className="imprint-loader__subtitle">
              {SUBMARK.split('').map((letter, index) => (
                <span
                  key={`galleria-${index}`}
                  className="imprint-loader__subletter"
                  style={{ '--letter-index': index }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
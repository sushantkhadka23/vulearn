// import React, { useState } from 'react';
// import { AlertTriangle, ShieldCheck, Play, RefreshCw } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/Card';
// import { Alert, AlertDescription, AlertTitle } from '../../../components/Alert';


// interface XSSPayload {
//   raw: string;
//   sanitized: string;
// }

// const XSSInjectionLab = () => {
//   const [payload, setPayload] = useState<XSSPayload>({
//     raw: '',
//     sanitized: ''
//   });
//   const [attackHistory, setAttackHistory] = useState<string[]>([]);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const sanitizeInput = (input: string): string => {
//     return input
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#39;')
//       .replace(/&/g, '&amp;')
//       .replace(/\(/g, '&#40;')
//       .replace(/\)/g, '&#41;');
//   };

//   const handleAttack = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const input = form.elements.namedItem('xssInput') as HTMLInputElement;
//     const newPayload = input.value;
    
//     setPayload({
//       raw: newPayload,
//       sanitized: ''
//     });
    
//     setAttackHistory(prev => [...prev, newPayload]);
//     setShowSuccess(false);
//     input.value = '';
//   };

//   const handleMitigation = () => {
//     setPayload(prev => ({
//       ...prev,
//       sanitized: sanitizeInput(prev.raw)
//     }));
//     setShowSuccess(true);
//   };

//   const handleReset = () => {
//     setPayload({ raw: '', sanitized: '' });
//     setAttackHistory([]);
//     setShowSuccess(false);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
//        <Card>
//         <CardHeader>
//           <CardTitle className="text-3xl font-bold">XSS Injection Lab</CardTitle>
//           <CardDescription>
//             Practice identifying and mitigating XSS vulnerabilities in a safe environment
//           </CardDescription>
//         </CardHeader>
        
//         <CardContent className="space-y-6">
//           <Alert>
//             <AlertTriangle className="h-4 w-4" />
//             <AlertTitle>Educational Environment</AlertTitle>
//             <AlertDescription>
//               This is a controlled environment for learning about XSS. All injections are simulated.
//             </AlertDescription>
//           </Alert>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Test XSS Payload</h3>
//             <form onSubmit={handleAttack} className="space-y-4">
//               <div>
//                 <label htmlFor="xssInput" className="block text-sm font-medium mb-2">
//                   Enter your payload:
//                 </label>
//                 <input
//                   id="xssInput"
//                   name="xssInput"
//                   type="text"
//                   className="w-full p-2 border rounded-md"
//                   placeholder='<script>alert("XSS")</script>'
//                 />
//               </div>
//               <div className="space-x-2">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                 >
//                   <Play className="h-4 w-4" />
//                   <span>Execute Payload</span>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="inline-flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                 >
//                   <RefreshCw className="h-4 w-4" />
//                   <span>Reset Lab</span>
//                 </button>
//               </div>
//             </form>
//           </div>

//           {payload.raw && (
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Raw Output (Vulnerable):</h4>
//                 <div dangerouslySetInnerHTML={{ __html: payload.raw }} />
//               </div>

//               <button
//                 onClick={handleMitigation}
//                 className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//               >
//                 <ShieldCheck className="h-4 w-4" />
//                 <span>Apply Mitigation</span>
//               </button>

//               {showSuccess && (
//                 <div className="bg-green-100 p-4 rounded-lg">
//                   <h4 className="font-medium mb-2">Sanitized Output (Protected):</h4>
//                   <code className="block whitespace-pre-wrap">{payload.sanitized}</code>
//                 </div>
//               )}
//             </div>
//           )}

//           {attackHistory.length > 0 && (
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Attack History</h3>
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <ul className="space-y-2">
//                   {attackHistory.map((attack, index) => (
//                     <li key={index} className="font-mono text-sm">
//                       {attack}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default XSSInjectionLab;


import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Play, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/Card';
import { Alert, AlertDescription, AlertTitle } from '../../../components/Alert';

interface XSSPayload {
  raw: string;
  sanitized: string;
}

const XSSInjectionLab = () => {
  const [payload, setPayload] = useState<XSSPayload>({
    raw: '',
    sanitized: ''
  });
  const [attackHistory, setAttackHistory] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const sanitizeInput = (input: string): string => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/&/g, '&amp;')
      .replace(/\(/g, '&#40;')
      .replace(/\)/g, '&#41;');
  };

  const handleAttack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('xssInput') as HTMLInputElement;
    const newPayload = input.value;
    
    setPayload({
      raw: newPayload,
      sanitized: ''
    });
    
    setAttackHistory(prev => [...prev, newPayload]);
    setShowSuccess(false);
    input.value = '';
  };

  const handleMitigation = () => {
    setPayload(prev => ({
      ...prev,
      sanitized: sanitizeInput(prev.raw)
    }));
    setShowSuccess(true);
  };

  const handleReset = () => {
    setPayload({ raw: '', sanitized: '' });
    setAttackHistory([]);
    setShowSuccess(false);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-centerbg-bg p-6">
      <div className="w-full max-w-4xl py-12 px-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-serif">XSS Injection Lab</CardTitle>
            <CardDescription>
              Practice identifying and mitigating XSS vulnerabilities in a safe environment
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Educational Environment</AlertTitle>
              <AlertDescription>
                This is a controlled environment for learning about XSS. All injections are simulated.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Test XSS Payload</h3>
              <form onSubmit={handleAttack} className="space-y-4">
                <div>
                  <label htmlFor="xssInput" className="block text-sm font-medium mb-2">
                    Enter your payload:
                  </label>
                  <input
                    id="xssInput"
                    name="xssInput"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder='<script>alert("XSS")</script>'
                  />
                </div>
                <div className="space-x-2">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    <Play className="h-4 w-4" />
                    <span>Execute Payload</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Reset Lab</span>
                  </button>
                </div>
              </form>
            </div>

            {payload.raw && (
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Raw Output (Vulnerable):</h4>
                  <div dangerouslySetInnerHTML={{ __html: payload.raw }} />
                </div>

                <button
                  onClick={handleMitigation}
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Apply Mitigation</span>
                </button>

                {showSuccess && (
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Sanitized Output (Protected):</h4>
                    <code className="block whitespace-pre-wrap">{payload.sanitized}</code>
                  </div>
                )}
              </div>
            )}

            {attackHistory.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Attack History</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {attackHistory.map((attack, index) => (
                      <li key={index} className="font-mono text-sm">
                        {attack}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default XSSInjectionLab;

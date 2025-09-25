export default function DebugTailwind() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Debug Tailwind CSS
      </h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Teste de Cores</h2>
          <div className="flex space-x-4">
            <div className="w-20 h-20 bg-red-500 rounded"></div>
            <div className="w-20 h-20 bg-green-500 rounded"></div>
            <div className="w-20 h-20 bg-blue-500 rounded"></div>
            <div className="w-20 h-20 bg-yellow-500 rounded"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Teste de Ícones</h2>
          <div className="flex space-x-6 items-center">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="mt-4 text-gray-600">
            Ícones de diferentes tamanhos: w-8 h-8, w-12 h-12, w-16 h-16
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Teste de Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded">Item 1</div>
            <div className="bg-green-100 p-4 rounded">Item 2</div>
            <div className="bg-yellow-100 p-4 rounded">Item 3</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Teste de Botões</h2>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              Botão Azul
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
              Botão Verde
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded transition-colors">
              Botão Outline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
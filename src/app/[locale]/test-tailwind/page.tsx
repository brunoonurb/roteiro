export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Teste do Tailwind CSS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Card 1
            </h2>
            <p className="text-gray-600 mb-4">
              Este é um teste para verificar se as classes do Tailwind estão funcionando.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Botão de Teste
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Card 2
            </h2>
            <p className="text-gray-600 mb-4">
              Se você conseguir ver os estilos aplicados, o Tailwind está funcionando.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Outro Botão
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Card 3
            </h2>
            <p className="text-gray-600 mb-4">
              Cores, espaçamentos e responsividade devem estar funcionando.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Terceiro Botão
            </button>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Gradiente de Teste</h3>
          <p className="text-lg">
            Se você conseguir ver este gradiente e os estilos acima, o Tailwind CSS está funcionando corretamente!
          </p>
        </div>
      </div>
    </div>
  )
}
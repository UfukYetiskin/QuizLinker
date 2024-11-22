import './App.css';

function App() {
  return (
    <main className="App">
      <h1 className='text-2xl'>Selamun Hello</h1>
    </main>
  );
}

export default App;

//Dosyaları Tanıyalım
//public, webpack tarafından işlenmesi gerekmeyen dosyalar ayrılmıştır. HTML dosyaları, favicon.ico ve diğer dosyaları buraya ekleriz.
//src, merkez dosyadır.
//assets, resimler, yazı tipleri ve diğer statik dosyaları saklamak için kullanırız.
//components, tekrar kullanılabilir componentleri burada saklarız.
//context, context API ile state yönetimi için contet dosyaları saklanır.
//pages, sayfalar veya ana bölümün kendine ait dosyaları saklanır.
//navigation, route yapısını yönetmek için kullanılır.
//imports, içe aktarma ifdelerini yönetmek için kullanırız. birden fazla componenti dışarı aktarn index.js kullanılabilir.
//styles, genel stilleri, commponentleri ve yardımcı sınıflar için still dosyaları saklanır.
//redux ya da store, redux state management kütüphanesinin dosylarını saklar
//utils, yardımcı fonksiyonları veya sınıfları barındırır.
//test, test dosyaları saklanır.
//services, herhangi bir harici API ile arayüz için tüm kodunuzu içerir. Büyük projelerde erişmeniz gereken birçok farklı API'niz olacak ve bu klasör, bu API'lerle etkileşim kuran kodu koyacağınız yerdir.
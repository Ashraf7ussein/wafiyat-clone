const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-foreground mb-6">
          الصفحة غير موجودة
        </h2>
        <p className="text-text text-lg mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم حذفها.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

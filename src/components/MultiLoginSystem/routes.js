<Routes>
  <Route
    path="/admin"
    element={
      <ProtectedRoute role={user.role} requiredRole="admin">
        <AdminPage />
      </ProtectedRoute>
    }
  />
  <Route
    path="/editor"
    element={
      <ProtectedRoute role={user.role} requiredRole="editor">
        <EditorPage />
      </ProtectedRoute>
    }
  />
  <Route path="/unauthorized" element={<UnauthorizedPage />} />
</Routes>

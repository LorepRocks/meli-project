export function formatPrice(price) {
  return new Intl.NumberFormat('de-DE').format(price);
}

export function parseCondition(condition) {
  return condition === 'new' ? 'Nuevo' : 'Usado';
}

export function searchCatalog(catalog, query, limit = 12) {
  const terms = query.toLowerCase().split(/[^a-z0-9]+/).filter((term) => term.length > 2);
  return catalog.practices.map((item) => {
    const text = `${item.title} ${item.description} ${item.domains} ${item.subsection} ${item.category}`.toLowerCase();
    const score = terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0);
    return { ...item, score };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, limit);
}

export function catalogOverview(catalog) {
  const grouped = new Map();
  for (const p of catalog.practices) {
    const group = grouped.get(p.category) ?? [];
    group.push({ id: p.id, title: p.title, subsection: p.subsection });
    grouped.set(p.category, group);
  }
  return [...grouped].map(([category, practices]) => ({ category, count: practices.length, practices }));
}

export const findPractices = (catalog, ids) => ids.map((id) => catalog.practices.find((p) => p.id === id)).filter(Boolean);

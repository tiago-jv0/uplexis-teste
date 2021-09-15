class SourcesMapper {
  static fromApiToApp(sources, icons) {
    const mappedSources = sources.map((source, index) => {
      const icon = icons[index].icon.replace("fas fa-", "");

      return {
        id: source.id,
        category: source.name,
        icon,
      };
    });

    mappedSources.unshift({
      id: sources.length + 1,
      icon: "globe",
      category: "Mundo",
      selected: true,
    });

    return mappedSources;
  }
}

export default SourcesMapper;

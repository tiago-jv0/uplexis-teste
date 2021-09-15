class AppsMapper {
  static fromApiToApp(apps, icons) {
    return apps.map((app, index) => {
      const icon = icons[index].icon
        .replace("fas fa-", "")
        .replace("far fa-", "");

      return {
        id: app.id,
        name: app.name,
        category: app.category,
        price: app.price,
        date: new Date(app.date).toLocaleDateString("pt-br"),
        description: app.description,
        icon,
      };
    });
  }
}

export default AppsMapper;

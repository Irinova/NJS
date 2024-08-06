# NJS


# **вставка данных о двух книгах в коллекцию book**

```
try {
    db.books.insertMany( [
            { title: "Алиса в стране чудес", description: "Детская литература", authors: "Льюис Кэрролл" },
            { title: "Остров сокровищ", description: "Подростковая литература", authors: "Роберт Льюис Стивенсон" }
        ] );
    } catch (e) {
        print (e);
    }
```

# **поиск полей документов коллекции books по полю title**

```
try {
    db.books.find( { title: "Алиса в стране чудес" } )
    } catch (e) {
        print (e);
    }
```

# **запрос для редактирования полей: description и authors коллекции books по _id записи**

```
try {
      db.books.updateOne(
            { _id : SOME_ID },
            { $set: { "description" : NEW_DESCRIPTION, authors: NEW_AUTHORS } }
        );
    } catch (e) {
        print (e);
    }
```


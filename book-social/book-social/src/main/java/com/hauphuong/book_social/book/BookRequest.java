package com.hauphuong.book_social.book;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record BookRequest (Integer id,
                           @NotNull(message = "Title is required")
                           @NotEmpty(message = "Title is required")
                           String title,
                           @NotNull(message = "Author Name is required")
                           @NotEmpty(message = "Author Name is required")
                           String authorName,
                           @NotNull(message = "International Standard Book Number is required")
                           @NotEmpty(message = "International Standard Book Number is required")
                           String isbn,
                           @NotNull(message = "Synopsis is required")
                           @NotEmpty(message = "Synopsis is required")
                           String synopsis,
                           boolean shareable){
}

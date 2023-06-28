import { APIClient } from ".";

export class FormClient extends APIClient {
    public async contactMe(name: string, email: string, message: string) {
        const response = await this.http.post(
            'https://public.herotofu.com/v1/820db310-15d4-11ee-8025-97a9fb2f29da',
            JSON.stringify({ name, email, message })
        )

        if (!response.ok) {
            await this.handleError(response);
        };
    }
}
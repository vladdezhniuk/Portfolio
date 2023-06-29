import { APIClient } from ".";

export class FormClient extends APIClient {
    public async contactMe(name: string, email: string, message: string) {
        const response = await this.http.post(
            `https://public.herotofu.com/v1/${process.env.HEROTOFU_API_KEY}`,
            JSON.stringify({ name, email, message })
        )

        if (!response.ok) {
            await this.handleError(response);
        };
    }
}